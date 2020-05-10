package com.cab.file.comman;

import java.awt.AlphaComposite;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.DirectoryNotEmptyException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Properties;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.stereotype.Service;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;

/**
 * @author Krishna
 *
 */

@Service
public class AttachmentUtil {

	// @Autowired
	// private PhotoGalleryRepository photoGalleryRepository;

	@Autowired
	private Environment environment;

	final static String fileSeparator = File.separator;

	public String generateDocumentName(String fileName) {
		return fileName.substring(0, fileName.lastIndexOf("."))
				+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddhhmmssMsn"))
				+ fileName.substring(fileName.lastIndexOf("."));
	}

	public String generateDocumentName() {
		return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddhhmmssMsn"));
	}

	/**
	 * @param fileName
	 * @return String
	 * 
	 *         <p>
	 *         pass fileName and it will extract extension from the fileName
	 *         </p>
	 */
	public String getExtension(String fileName) {
		return fileName.substring(fileName.lastIndexOf("."));
	}

	public boolean saveAttachment(InputStream inputStream, String fileName, String pathFromProperty,
			HttpServletRequest request) throws IOException {
		/*
		 * System.out.println("environment.getProperty(pathFromProperty)" +environment);
		 * System.out.println("pathFromProperty " +pathFromProperty);
		 */
		// String rootDirectory =
		// request.getSession().getServletContext().getRealPath(environment.getProperty(pathFromProperty));
		String rootDirectory = environment.getProperty(pathFromProperty);
		System.out.println(
				"image path : " + rootDirectory + " fileName " + fileName + " directoryName " + pathFromProperty);
		boolean status = false;
		try {
			/*
			 * File destination = new
			 * File(environment.getRequiredProperty("file.repository.path").concat(
			 * directoryName + File.separator + fileName));
			 */
			File destination = new File(rootDirectory.concat(fileName));
			Files.createDirectories(Paths.get(destination.getAbsolutePath()).getParent());
			FileUtils.copyInputStreamToFile(inputStream, destination);
			status = true;
			inputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return status;
	}

	/**
	 * @param path        path
	 * @param fileName    fileName
	 * @param inputStream inputStream
	 * @param replace     pass true for Replace Existing otherwise False
	 * @return boolean
	 * @throws IOException
	 */
	public boolean saveAttachment(String path, String fileName, InputStream inputStream, boolean replace)
			throws IOException {
		try {
			System.out.println("saveAttachment : " + path + fileSeparator + fileName);
			if (replace) {
				Files.copy(inputStream, Paths.get(path + fileSeparator + fileName),
						StandardCopyOption.REPLACE_EXISTING);
			} else {
				Files.copy(inputStream, Paths.get(path + fileSeparator + fileName));
			}
			inputStream.close();
			return true;
		} catch (FileAlreadyExistsException fe) {
			System.err.println("Exception : File Already Exists so printStackTrace not printed.");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return false;
	}

	/**
	 * @param path     path
	 * @param fileName fileName
	 * @return boolean
	 * @throws IOException
	 *                     <p>
	 *                     This method delete file based on (Path + FileName)
	 *                     <p>
	 */
	public boolean deleteAttachment(String path, String fileName) throws IOException {
		try {
			System.out.println("deleteAttachment : " + path + fileSeparator + fileName);
			Files.deleteIfExists(Paths.get(path + fileSeparator + fileName));
			return true;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return false;
	}

	public boolean deleteAttachment(String fileName, String pathFromProperty, HttpServletRequest request) {
		boolean status = false;
		try {
			String rootDirectory = environment.getProperty(pathFromProperty);
			System.out.println("path" + rootDirectory + " fileName " + fileName);
			Files.deleteIfExists(Paths.get(rootDirectory.concat(fileName)));
			status = true;
		} catch (NoSuchFileException e) {
			e.printStackTrace();
		} catch (DirectoryNotEmptyException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return status;
	}
	/*
	 * public void savePhotoGallery(PhotoGallery photoGallery) {
	 * 
	 * if(null !=photoGalleryRepository.saveAndFlush(photoGallery))
	 * System.out.println("saved "); else System.out.println("not saved ");
	 * 
	 * }
	 */

	/**
	 * @param path     path
	 * @param fileName fileName
	 * @param request  object of HttpServletRequest
	 * @return String
	 * @throws IOException
	 */
	public String convertFileIntoBase64String(String path, String fileName, HttpServletRequest request)
			throws IOException {
		File file;
		FileInputStream fileInputStream = null;
		ByteArrayOutputStream byteArrayOutputStream = null;
		String encodedString = null;
		try {
			file = new File(path + fileName);
			if (file.exists()) {
				fileInputStream = new FileInputStream(file);
				byteArrayOutputStream = new ByteArrayOutputStream();
				int b;
				byte[] buffer = new byte[1024];
				while ((b = fileInputStream.read(buffer)) != -1) {
					byteArrayOutputStream.write(buffer, 0, b);
				}

				byte[] fileBytes = byteArrayOutputStream.toByteArray();
				fileInputStream.close();
				byteArrayOutputStream.close();

				byte[] encoded = Base64.encodeBase64(fileBytes);
				encodedString = new String(encoded);
				return encodedString;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (byteArrayOutputStream != null) {
				byteArrayOutputStream.close();
			}
			if (fileInputStream != null) {
				fileInputStream.close();
			}
		}
		return encodedString;
	}
	
	

	public boolean saveAttachmentInRepsitory(InputStream inputStream, String fileName, String directoryName,
			HttpServletRequest request) throws IOException {
		Resource resource = new ClassPathResource("/application.properties");
		Properties prop = PropertiesLoaderUtils.loadProperties(resource);
		String rootPath = prop.getProperty("file.repository.TalkFeatureImagePath");
		File rootDirectory = new File(rootPath);
		if (!rootDirectory.exists())
			rootDirectory.mkdirs();

		boolean status = false;
		try {
			/*
			 * File destination = new
			 * File(environment.getRequiredProperty("file.repository.path").concat(
			 * directoryName + File.separator + fileName));
			 */
			File destination = new File(rootDirectory + File.separator + fileName);
			Files.createDirectories(Paths.get(destination.getAbsolutePath()).getParent());
			FileUtils.copyInputStreamToFile(inputStream, destination);
			status = true;
			inputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return status;
	}

	public void createThumbnail(String bannerThumbnailName, String bannerImageName, String homepagebannerpath,
			HttpServletRequest request) throws IOException {
		int width = 305, height = 168;
		String rootDirectory = environment.getProperty(homepagebannerpath);
		File input = new File(rootDirectory.concat(bannerImageName));
		BufferedImage inputBuffer = ImageIO.read(input);

		String fileNameWithOutExt = FilenameUtils.removeExtension(bannerImageName);
		String extension = bannerImageName.substring(bannerImageName.lastIndexOf("."));
		switch (extension) {// check image's extension
		case ".jpeg":
			extension = "jpeg";
			break;
		case ".png":
			extension = "png";
			break;
		default:// should write cases for more images types
			extension = "jpg";
			break;
		}

		System.out.println("bannerThumbnailName-----" + bannerThumbnailName);

		System.out.println("fileNameWithOutExt" + fileNameWithOutExt + "\n extension" + extension + "\nbannerImageName"
				+ bannerImageName);

		System.out.println("rootDirectory" + rootDirectory + "\nrootDirectory.concat(bannerImageName)"
				+ rootDirectory.concat(bannerImageName));

		// Output image as BufferedImage
		//BufferedImage outputBuffer = Thumbnails.of(inputBuffer).size(width, height).outputFormat(extension)
			//	.asBufferedImage();
		//File outputBufferedImage = new File(rootDirectory.concat(bannerThumbnailName));
	//	ImageIO.write(outputBuffer, extension, outputBufferedImage);

	}

	/*
	 * public String createPdfDocument(PressRelease pressRelease,String
	 * bannerImageName,String rootDirectory, HttpServletRequest request) throws
	 * DocumentException, IOException {
	 * 
	 * String font = request.getServletContext().getRealPath("/font/FreeSans.ttf");
	 * 
	 * G:\mygov_maha\src\main\resources\static\admin\font
	 * 
	 * System.out.println("font::    "+font); Document document = new Document();
	 * rootDirectory = environment.getProperty(rootDirectory); String
	 * fileNameWithOutExt = FilenameUtils.removeExtension(bannerImageName);
	 * 
	 * String
	 * pdfFileName=fileNameWithOutExt+LocalDateTime.now().format(DateTimeFormatter.
	 * ofPattern("yyMMddhhmmssMsn"))+".pdf"; String fileName=rootDirectory +
	 * File.separator+pdfFileName ;
	 * 
	 * PdfWriter.getInstance(document, new FileOutputStream(new File(fileName))); //
	 * open document.open();
	 * 
	 * Paragraph p = new Paragraph(); p.add(pressRelease.getPressReleaseTitle());
	 * p.setAlignment(Element.ALIGN_CENTER); document.add(p);
	 * 
	 * Font f = FontFactory.getFont(font, BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
	 * //Font f = new Font(); f.setStyle(Font.NORMAL); f.setSize(8);
	 * 
	 * System.out.println("pressRelease.getLast_date()"+pressRelease.getLastDate());
	 * String pattern = "dd-MM-yyyy"; SimpleDateFormat simpleDateFormat = new
	 * SimpleDateFormat(pattern);
	 * 
	 * String date = simpleDateFormat.format(pressRelease.getLastDate());
	 * System.out.println(date);
	 * 
	 * document.add(new Paragraph(date, f)); File file=new File(rootDirectory +
	 * File.separator + pressRelease.getBannerImage()); if(file.exists()) { Image
	 * image = Image.getInstance(rootDirectory + File.separator +
	 * pressRelease.getBannerImage().toString()); image.scaleToFit(110,110);
	 * image.setAlignment(Element.ALIGN_LEFT); document.add(image); }
	 * 
	 * 
	 * Paragraph content = new
	 * Paragraph(pressRelease.getContent().replaceAll("\\<.*?\\>", ""),f);
	 * //content.add(pressRelease.getContent().replaceAll("\\<.*?\\>", ""));
	 * content.setAlignment(Element.ALIGN_LEFT);
	 * 
	 * document.add(content); // close document.close();
	 * 
	 * System.out.println("Done"); return pdfFileName; }
	 */

	public String urlFormate(String string) {
		String s1lower = string.toLowerCase();
		String replaceString = s1lower.replace(' ', '-');// replaces all occurrences of '' to '-'
		return replaceString;
	}

	public String urlFormateWithoutDoubleDash(String string) {
		String s1lower = string.toLowerCase();
		String replaceString2 = s1lower.replace(' ', '-');// replaces all occurrences of '' to '-'

		String replaceString = replaceString2.replace("--", "-"); // replaces all occurrences of '--' to '-'

		return replaceString;
	}

	public String getImagePath(String imagePath) {
		String ImagePath = "";
		try {
			Resource resource = new ClassPathResource("/application.properties");
			Properties prop = PropertiesLoaderUtils.loadProperties(resource);
			ImagePath = prop.getProperty(imagePath);

			System.out.println("ImagePath : " + ImagePath);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return ImagePath;
	}

	@SuppressWarnings("null")
	public void createThumbnail(String bannerThumbnailName, String bannerImageName, String homepagebannerpath,
			int width, int height,

			HttpServletRequest request) throws IOException {
		// int width=305,height=168;
		BufferedImage tempJPG = null;
		String rootDirectory = environment.getProperty(homepagebannerpath);

		java.awt.Image inputBuffer = ImageIO.read(new File(rootDirectory.concat(bannerImageName)));

		// double aspectRatio = (double) inputBuffer.getWidth(null)/(double)
		// inputBuffer.getHeight(null);
		// tempPNG = resizeImage(img, 100, (int) (100/aspectRatio));
		// tempJPG.getScaledInstance(width, height, java.awt.Image.SCALE_DEFAULT);
		tempJPG = resizeImage(inputBuffer, width, height);
		File outputBufferedImage = new File(rootDirectory.concat(bannerThumbnailName));
		ImageIO.write(tempJPG, "jpg", outputBufferedImage);

	}

	/**
	 * This function resize the image file and returns the BufferedImage object that
	 * can be saved to file system.
	 */
	public static BufferedImage resizeImage(final java.awt.Image inputBuffer, int width, int height) {
		final BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		final Graphics2D graphics2D = bufferedImage.createGraphics();
		graphics2D.setComposite(AlphaComposite.Src);
		// below three lines are for RenderingHints for better image quality at cost of
		// higher processing time
		graphics2D.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		graphics2D.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
		graphics2D.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
		graphics2D.drawImage(inputBuffer, 0, 0, width, height, null);
		graphics2D.dispose();
		return bufferedImage;

	}

}
