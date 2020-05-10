package com.cab.file.comman;


import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.servlet.ServletContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Krishna
 */
@Service("commonFileUploadService")
@PropertySource("classpath:application.properties")
public class CommonFileUploadService {
	
	@Autowired
	Environment environment;

	@Autowired
	private ServletContext context;

	private static final Logger logger = LoggerFactory.getLogger(CommonFileUploadService.class);

	public String uploadImage(MultipartFile file, String folder, Integer id) {

		if (!file.isEmpty()) {
		
			try {
				byte[] bytes = file.getBytes();
				File dir = new File(environment.getProperty("file.repository.path").concat(folder));
				if (!dir.exists())
					dir.mkdirs();
				// Create the file on server
				File serverFile = new File(dir.getAbsolutePath() + File.separator + new Date().getTime() + file.getOriginalFilename().replaceAll("\\s", "_"));
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();
				// logger.debug("file location is
				// "+serverFile.getAbsolutePath());
				return serverFile.getAbsolutePath();
			} catch (Exception e) {
				System.out.println(e);
				logger.info("error");
				return "error";
			}
		} else {
			return null;
		}
	}
	
	public String uploadImagePhoto(MultipartFile file, String folder, Integer id) {

		if (!file.isEmpty()) {
			try {
				byte[] bytes = file.getBytes();
			//	Resource resource = new ClassPathResource("/custom.properties");
				Resource resource = new ClassPathResource("/application.properties");
				Properties props = PropertiesLoaderUtils.loadProperties(resource);
                  //String rootPath = props.getProperty("fileuploadserverdrive");
            //      String rootPath = props.getProperty("fileuploadserverdrive");
				String rootPath = context.getRealPath("/");
				
			//	File destination = new File(environment.getProperty("file.repository.path").concat(pattern+"-"+file.getMultipartFile().getOriginalFilename()));
			//	File dir = new File(environment.getProperty("file.repository.path")+ File.separator +id.toString());
//				File dir = new File(environment.getProperty("file.repository.path"));
				File dir = new File(environment.getProperty("file.repository.path").concat(folder));
			//	File dir = new File(rootPath + File.separator + props.getProperty(folder) + File.separator + id.toString());
				if (!dir.exists())
					dir.mkdirs();
				// Create the file on server
				File serverFile = new File(dir.getAbsolutePath() + File.separator + file.getOriginalFilename());
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();
				// logger.debug("file location is
				// "+serverFile.getAbsolutePath());
				return serverFile.getAbsolutePath();
			} catch (Exception e) {
				System.out.println(e);
				logger.info("error");
				return "error";
			}
		} else {
			return null;
		}
	}
	
	public List<String> uploadMultipleImage(MultipartFile[] files, String path,Integer id) {   
		
		List<String> list = new ArrayList<String>();
		for (int i = 0; i < files.length; i++) {
			MultipartFile file = files[i];
			list.add(uploadImage(file, path,id));
		}
		
		return list;
	}

	public File getFirstFile(Integer id, String folder) throws IOException {
      //Resource resource = new ClassPathResource("/custom.properties");
		Resource resource = new ClassPathResource("/application.properties");
		Properties props = PropertiesLoaderUtils.loadProperties(resource);
		File file = null;
		String rootPath = props.getProperty("fileuploadserverdrive");
		File dir = new File(rootPath + File.separator + props.getProperty(folder) + File.separator + id.toString());
		if (!dir.exists()) {
			return file;
		}
		File files[] = new File(dir.getAbsolutePath()).listFiles();
		if (files != null && files.length > 0) {
			file = files[0];
		}
		return file;
	}

	public void deleteAllFilesOnFilePath(Integer detailid, String folder) throws IOException {
	//	Resource resource = new ClassPathResource("/custom.properties");
		Resource resource = new ClassPathResource("/application.properties");
		Properties props = PropertiesLoaderUtils.loadProperties(resource);

		String rootPath = props.getProperty("fileuploadserverdrive");
		File dir = new File(
				rootPath + File.separator + props.getProperty(folder) + File.separator + detailid.toString());
		if (dir.exists()) {
			for (File f : dir.listFiles()) {
				f.delete();
			}
			dir.delete();
		}

	}
	public String uploadSigleImagePhoto(MultipartFile file, String folder, Integer id) {
		if (!file.isEmpty()) {
			try {
				byte[] bytes = file.getBytes();
				Resource resource = new ClassPathResource("/application.properties");
				Properties props = PropertiesLoaderUtils.loadProperties(resource);
				String rootPath = context.getRealPath("/");
				
//				File dir = new File(environment.getProperty("file.repository.path"));
				File dir = new File(environment.getProperty("file.repository.path").concat(folder));
				if (!dir.exists())
					dir.mkdirs();
				String newfilename = file.getOriginalFilename();
				newfilename = newfilename.replace(" ", "_");
				File serverFile = new File(dir.getAbsolutePath() + File.separator + "demo"+newfilename);
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();
				return serverFile.getAbsolutePath();
			} catch (Exception e) {
				System.out.println(e);
				logger.info("error");
				return "error";
			}
		} else {
			return null;
		}
	}
	
	public String uploadFile(MultipartFile file) {
		String filePath = null;
		if (!file.isEmpty()) {
			try {
				Resource resource = new ClassPathResource("/application.properties");
				Properties props = PropertiesLoaderUtils.loadProperties(resource);
				String rootPath = props.getProperty("file.uploadFileGPF");

				File dir = new File(rootPath + File.separator);
				if (!dir.exists())
					dir.mkdirs();
				byte[] bytes = file.getBytes();
				String newfilename = file.getOriginalFilename();
				newfilename = newfilename.replace(" ", "_");
				filePath = dir.getAbsoluteFile() + File.separator + newfilename;
				// Create the file on server
				File serverFile = new File(dir.getAbsoluteFile() + File.separator + newfilename);

				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return filePath;
	}
	
	public String uploadFileTravel(MultipartFile file) {
		String filePath = null;
		if (!file.isEmpty()) {
			try {
				Resource resource = new ClassPathResource("/application.properties");
		        Properties props = PropertiesLoaderUtils.loadProperties(resource);
				String rootPath = props.getProperty("file.fileuploadTravel");

				File dir = new File(rootPath + File.separator);
				if (!dir.exists())
					dir.mkdirs();
				byte[] bytes = file.getBytes();
				String newfilename = file.getOriginalFilename();
				newfilename = newfilename.replace(" ", "_");
				filePath = dir.getAbsoluteFile() + File.separator + newfilename;
				// Create the file on server
				File serverFile = new File(dir.getAbsoluteFile() + File.separator + newfilename);

				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return filePath;
	}
	
	 public List<String> uploadMultiFile(MultipartFile[] files, String path) {   //,HttpSession session
			List<String> list = new ArrayList<String>();
			for (int i = 0; i < files.length; i++) {
				MultipartFile file = files[i];
				list.add(uploadFileGPF(file, path));
			}
			return list;
		}
	
	 public String uploadFileGPF(MultipartFile file, String rootPath) {
			String filePath = null;
			if (!file.isEmpty()) {
				try {
					/*Resource resource = new ClassPathResource("/application.properties");
			        Properties props = PropertiesLoaderUtils.loadProperties(resource);
					String rootPath = props.getProperty("file.fileuploadTravel");*/

					File dir = new File(rootPath + File.separator);
					if (!dir.exists())
						dir.mkdirs();
					byte[] bytes = file.getBytes();
					String newfilename = file.getOriginalFilename();
					newfilename = newfilename.replace(" ", "_");
					filePath = dir.getAbsoluteFile() + File.separator + newfilename;
					// Create the file on server
					File serverFile = new File(dir.getAbsoluteFile() + File.separator + newfilename);

					BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
					stream.write(bytes);
					stream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			return filePath;
	  
	  }
	 
	 public String getDomainPath(){
		 return environment.getProperty("domain.path");
	 }
	 
	 public String getSaDsaRoleId(){
		 String str = environment.getProperty("sadas.head.level");
		 return str;
	 }
	 public String getHeadQrtDirectoreRoleId(){
		 String str =  environment.getProperty("director.head.level");
		 return str; 
	 }
	 public String getLdcUdcRoleId(){
		 String str = environment.getProperty("ldc.head.level");
		 return str;
	 }
	 public String getHeadQrtLdcSelfAndOtherRoleId(){
		 String str = environment.getProperty("ldc.other.head.level");
		 return str;
	 }
	 public String getFilePath(){
		 File dir = new File(environment.getProperty("file.repository.path").concat("attachFiles"));
			if (!dir.exists())
				dir.mkdirs();
			// Create the file on server
			return dir.getAbsolutePath() + File.separator + new Date().getTime() + "new";
	 }
	 
	 public String getReportAceeUserId(){
		 String str = environment.getProperty("report.access");
		 return str;
	 }
	 
	 public String getLocatioSixDiRoleId(){
		 String str =  environment.getProperty("location6.di.level");
		 return str; 
	 }
	 
}
