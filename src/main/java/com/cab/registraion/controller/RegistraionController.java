package com.cab.registraion.controller;

import java.util.List;
import java.util.Optional;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.cab.file.comman.AttachmentUtil;
import com.cab.file.comman.CommonFileUploadService;
import com.cab.registraion.dao.RegistrationDAO;
import com.cab.registraion.model.RegistrationEntity;
import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.Properties;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;


@Controller
@RequestMapping(value="/regis")
public class RegistraionController {
	
	@Autowired
	private CommonFileUploadService commonFileUploadService;
	
	@Autowired
	RegistrationDAO dao1;
	
	@Autowired
	private AttachmentUtil attachmentUtil;

	@Autowired
	Environment environment;
	
	// ***   default index page  *** 
	@GetMapping("/registration")
	public String registrationForm() {
		System.out.println("inside registrationForm ");
		return "registration";
	}
	
	  // ***   registration form submit  ***
	@PostMapping("/registration")
	public String getRegistrationFormData(@ModelAttribute RegistrationEntity registrationEntity,
			Model model, HttpServletRequest request) {
		System.out.println("inside getRegistrationFormData ");
		try {
			
			if(registrationEntity.getFiles() !=null)
			{
				String uploadFile=commonFileUploadService.uploadImage(registrationEntity.getFiles(), "hrms", registrationEntity.getId());
				registrationEntity.setSupportivefile(uploadFile.replace("\\", "/"));
			}
			
			if(registrationEntity.getFiles2() !=null)
			{
				String uploadImage=commonFileUploadService.uploadImage(registrationEntity.getFiles2(), "hrmsimage", registrationEntity.getId());
				registrationEntity.setItemimage(uploadImage.replace("\\", "/"));
			}
			
		dao1.save(registrationEntity);
		}catch(Exception e) {
			e.printStackTrace();
		}
		 return "redirect:allRegistrationRecord";
	}
	
	// ***   delete user from listing page  ***
	@RequestMapping(value = "/registrationDelete/{id}", method = RequestMethod.GET)
	public String registrationDelete(@PathVariable int id, RedirectAttributes redirectAttributes) {
		System.out.println("delete record");
		 dao1.deleteById(id);
		 redirectAttributes.addFlashAttribute("successfuldelete","Record deleted successfully!");
		return "redirect:/regis/allRegistrationRecord";
	}
	
	// ***   listing page  ***
	@GetMapping("/allRegistrationRecord")
	public String allRegistrationRecord(Model model,HttpServletRequest req) throws IOException {
		System.out.println("all record");
		List<RegistrationEntity> list = dao1.findAll();
		
		for( RegistrationEntity list1:list) {
			System.out.println("path: "+list1.getItemimage());
			 String result = list1.getItemimage();
			 String[] path1=result.split("/");
			 String p1=path1[0];
			 String p2=path1[1];
			 String p3= p1+ "/" +p2+"/";
			 
			 String[] out1 = result.split("/");
			 String out2 = out1[2];
			 
	model.addAttribute("userImage",attachmentUtil.convertFileIntoBase64String(p3,out2, req));
	list1.setItemimage(attachmentUtil.convertFileIntoBase64String(p3,out2, req));
		}
		model.addAttribute("list",list);
		return "allRecord";
	}
	
	// ***   particular user information view page  ***
	@GetMapping("/recordById/{id}")
	public String recordById(@PathVariable int id,Model model,HttpServletRequest req) throws IOException {
		System.out.println("all record");
		 Optional<RegistrationEntity> list = dao1.findById(id);
		 if(list.isPresent()) {
			 model.addAttribute("idBasedEmployee",list.get());
			 model.addAttribute("employeeFile",list.get().getItemimage());
			 
			 String result = list.get().getItemimage();
			 String[] path1=result.split("/");
			 String p1=path1[0];
			 String p2=path1[1];
			 String p3= p1+ "/" +p2+"/";
			 
			 String[] out1 = result.split("/");
			 String out2 = out1[2];
			 
			 model.addAttribute("userImage",attachmentUtil.convertFileIntoBase64String(p3,out2, req));
		 }
		return "recordById";
	}
	
	// ***   edit particular user information edit page ***
	@GetMapping("/editById/{id}")
	public String editById(@PathVariable int id,Model model,HttpServletRequest req)throws IOException {
		
		 Optional<RegistrationEntity> list = dao1.findById(id);
		 if(list.isPresent()) {
			 model.addAttribute("idBasedEmployee",list.get());
             //System.out.println("path: "+list.get().getItemimage());
			 
			 String result = list.get().getItemimage();
			 String[] path1=result.split("/");
			 String p1=path1[0];
			 String p2=path1[1];
			 String p3= p1+ "/" +p2+"/";
			 
			 String[] out1 = result.split("/");
			 String out2 = out1[2];
			model.addAttribute("userImage",attachmentUtil.convertFileIntoBase64String(p3,out2, req));
		 }
		return "editRecord";
	}
	
	// ***   edit particular user information edit page  POST data***
	@PostMapping("/editByIdUpdate/{id}")
	public String editByIdUpdate(@PathVariable int id,Model model,
			@ModelAttribute RegistrationEntity registrationEntity,
		   RedirectAttributes redirectAttributes) {
		System.out.println("edit record");
		try {
			
			RegistrationEntity userRecord=dao1.findByUserId(id);
			
			if(registrationEntity.getFiles().getSize() != 0)
			{
				String uploadFile=commonFileUploadService.uploadImage(registrationEntity.getFiles(), "hrms", registrationEntity.getId());
				registrationEntity.setSupportivefile(uploadFile.replace("\\", "/"));
			}
			
			if(registrationEntity.getFiles2().getSize() != 0)
			{
				String uploadImage=commonFileUploadService.uploadImage(registrationEntity.getFiles2(), "hrmsimage", registrationEntity.getId());
				registrationEntity.setItemimage(uploadImage.replace("\\", "/"));
			}
			
			// if both or one file is empty..
			//System.out.println(registrationEntity.getFiles2().getOriginalFilename());  // empty
			//System.out.println(registrationEntity.getFiles2().getSize());  //0s
			
			if(registrationEntity.getFiles().getSize() == 0)
			{
				registrationEntity.setSupportivefile(userRecord.getSupportivefile().replace("\\", "/"));
			}
			
			if(registrationEntity.getFiles2().getSize() == 0)
			{
				registrationEntity.setItemimage(userRecord.getItemimage().replace("\\", "/"));
			}
			
			dao1.save(registrationEntity);
			//redirectAttributes.addFlashAttribute("message","update record successfully.");
			}catch(Exception e) {
				e.printStackTrace();
			}
		 return "redirect:/regis/recordById/"+id+"";
	}
	
	// ***   particular user information download document in pdf format***
	@RequestMapping(value={ "download/{id}" }, method=RequestMethod.GET)
	public void leaveDownload(@PathVariable("id") int  id, HttpServletResponse response,HttpServletRequest request) 
	{
		try
		{
			System.out.println("inside pdf download.....");
			
			RegistrationEntity hrmsEmployeeAdjustmentStatus = dao1.findByUserId(id);
			
			String fileName = generateLeaveApprovalPDF(hrmsEmployeeAdjustmentStatus,request);
			response.setHeader("Content-Disposition", "attachement;filename=\"" +("leave"+id+".pdf") + "\"");
			response.setContentType("application/pdf");			
			File file = new File(fileName);			

			FileInputStream inputStream = new FileInputStream(file);
			byte[] outputBytes = new byte[(int) file.length()];
			inputStream.read(outputBytes);

			OutputStream oStream = response.getOutputStream();
			oStream.write(outputBytes, 0, outputBytes.length);
			oStream.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}
	
	// ***   actual logic to write a pdf for particular user information ***
	public String generateLeaveApprovalPDF(RegistrationEntity hrmsEmployeeAdjustmentStatus,HttpServletRequest request) 
	{
		String fileName = "";
		String certSignName = "";
		String certRole = "";
		String certDate = "";
		String userFirstName = "";
		String userLastName = "";
		String newFileName = "";
		String path = "";
		try {
			//LoggedUser user1 = (LoggedUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Resource resource = new ClassPathResource("/application.properties");
		Properties props = PropertiesLoaderUtils.loadProperties(resource);
		path = props.getProperty("file.repository.path");
		fileName = path + "LeaveApprovalPDF.pdf";
		
		Font bold = new Font(FontFamily.HELVETICA, 12, Font.BOLD);
		Font bold1 = new Font(FontFamily.HELVETICA, 12);
		Font font1 = new Font(FontFamily.HELVETICA, 10);
		Font font2 = new Font(FontFamily.HELVETICA, 8);
		
		Document document = new Document(PageSize.A4);
		PdfWriter.getInstance(document, new FileOutputStream(new File(fileName)));
		document.open();
		
		Rectangle rect = new Rectangle(577, 825, 18, 15); // you can resize
		// rectangle
		rect.enableBorderSide(1);
		rect.enableBorderSide(2);
		rect.enableBorderSide(4);
		rect.enableBorderSide(8);
		rect.setBorderColor(BaseColor.BLUE);
		rect.setBorderWidth(1);
		document.add(rect);
		
		File file = new File(request.getSession().getServletContext().getRealPath("/resources/img/se3.jpg"));
		Image img = Image.getInstance(file.toString());
		img.scaleToFit(1000f, 100f);
		img.setAlignment(img.MIDDLE);
		document.add(img);
		
		Paragraph header = new Paragraph("Vill-Nagla Chatti Post-Basrehar", font1);
		Paragraph headerNext = new Paragraph("Dist-Etawah Up 206253 India ", font1);
		//Paragraph headerAddress = new Paragraph("Dharohar Bhawan 24 Tilak Marg New Delhi - 110001 ", font1);

		header.setAlignment(Element.ALIGN_CENTER);
		headerNext.setAlignment(Element.ALIGN_CENTER);
		//headerAddress.setAlignment(Element.ALIGN_CENTER);			
		document.add(header);
		document.add(headerNext);

		LineSeparator ls = new LineSeparator(1, 90, null, Element.ALIGN_JUSTIFIED, -2);
		ls.setLineWidth(1f);
		
		ls.setLineColor(BaseColor.BLUE);

		document.add(new Chunk(ls));
		document.add(Chunk.NEWLINE);			
		Paragraph p = new Paragraph("Employee information Regarding leave", bold);
		p.setAlignment(Element.ALIGN_CENTER);
		document.add(p);
		document.add(new Chunk(ls));
		
		PdfPTable applicantDetails = new PdfPTable(4);
		applicantDetails.setWidthPercentage(100);
		applicantDetails.getDefaultCell().setHorizontalAlignment(Element.ALIGN_CENTER);
		 	
		PdfPCell footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase("Name : ", bold));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase(hrmsEmployeeAdjustmentStatus.getName(),bold1));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase("Designation /Post : ", bold));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase(hrmsEmployeeAdjustmentStatus.getDesignation(),bold1));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase("Phone : ", bold));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase(hrmsEmployeeAdjustmentStatus.getPhone() ,bold1));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase("Address : ", bold));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase(hrmsEmployeeAdjustmentStatus.getAddress(),bold1));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase("Date Of Birth : ", bold));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		SimpleDateFormat sf=new SimpleDateFormat("dd/MM/yyyy");
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase(sf.format(hrmsEmployeeAdjustmentStatus.getDob()) ,bold1));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
	
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase("", bold));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		footercell = new PdfPCell();
		footercell.setFixedHeight(45f);
	 	footercell.setPadding(6);
		footercell.setPhrase(new Phrase("",bold1));
		footercell.setBorder(0);
		footercell.setHorizontalAlignment(Element.ALIGN_LEFT);
		applicantDetails.addCell(footercell);
		
		
		document.add(applicantDetails);

		document.add(Chunk.NEWLINE);//document.add(Chunk.NEWLINE);
		
		PdfPTable leaveStatusTable = new PdfPTable(5);
		 leaveStatusTable.setWidthPercentage(100);
		 PdfPCell pdfCell = new PdfPCell(new Phrase("© Copyright 2018-2019 Krishna, All rights reserved."));
		  pdfCell.setFixedHeight(40f);
		  pdfCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
		  pdfCell.setPaddingLeft(20); leaveStatusTable.addCell(pdfCell);
		  
		  document.add(leaveStatusTable);
	  
		if(!certSignName.equals("")) {
			document.add(new Paragraph("Status : "+" 1 "+" and Digitally Signed By "+userFirstName+" "+ userLastName,bold));
			File tickFile = new File(request.getSession().getServletContext().getRealPath("/resources/img/right-tick.png")); 
			Image tickImg = Image.getInstance(tickFile.toString()); 
			tickImg.scaleToFit(70f, 70f);
			tickImg.setAlignment(tickImg.RIGHT); 
			document.add(tickImg);
			
			File digitalsigneFile = new File(request.getSession().getServletContext().getRealPath("/resources/img/digitalsigne.jpg")); 
			Image digitalsigneImg = Image.getInstance(digitalsigneFile.toString()); 
			digitalsigneImg.scaleToFit(100f, 100f);
			digitalsigneImg.setAlignment(digitalsigneImg.RIGHT); 
			document.add(digitalsigneImg);
		}
		else {
			document.add(new Paragraph("Status : "+" 2 "+" By "+userFirstName+" "+ userLastName,bold));
		}
		document.close();	
	}catch(Exception e) {
		System.out.println("First Exception : " + e);
	}

	try {
		newFileName = path+"Leave_Approval.pdf";
		Font f = new Font(FontFamily.HELVETICA, 15);
		PdfReader pdfReader = new PdfReader(fileName);
		PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileOutputStream(newFileName));
		PdfContentByte over = pdfStamper.getOverContent(1);
				    
	 
					
					Paragraph signature = new Paragraph(certSignName);
					Paragraph designation = new Paragraph(certRole);
					Paragraph dateTime = new Paragraph(certDate);
					
					ColumnText.showTextAligned(over, Element.ALIGN_CENTER, signature, 520, 105, 0);
					ColumnText.showTextAligned(over, Element.ALIGN_CENTER, designation, 520, 90, 0);
					ColumnText.showTextAligned(over, Element.ALIGN_CENTER, dateTime, 510, 75, 0);
															
	    
	    over.saveState();
		pdfStamper.close();
		pdfReader.close();
	}catch(Exception e) {
		System.out.println("PDF Reader : " + e);
	}
		try {
			newFileName = path+"Leave_Approval.pdf";
			Font f = new Font(FontFamily.HELVETICA, 15);
			PdfReader pdfReader = new PdfReader(fileName);
			PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileOutputStream(newFileName));
			PdfContentByte over = pdfStamper.getOverContent(1);
						
						Paragraph signature = new Paragraph(certSignName);
						Paragraph designation = new Paragraph(certRole);
						Paragraph dateTime = new Paragraph(certDate);
						
						ColumnText.showTextAligned(over, Element.ALIGN_CENTER, signature, 520, 105, 0);
						ColumnText.showTextAligned(over, Element.ALIGN_CENTER, designation, 520, 90, 0);
						ColumnText.showTextAligned(over, Element.ALIGN_CENTER, dateTime, 510, 75, 0);
																
		    
		    over.saveState();
			pdfStamper.close();
			pdfReader.close();
		}catch(Exception e) {
			System.out.println("PDF Reader : " + e);
		}
		return newFileName;
		}
	
	 // ***   attach doc downlaod  ***
	@RequestMapping(value="/supportiveDocument", method=RequestMethod.GET)
	public void showAttachmentOfficeExpenseDetail(@RequestParam("fileName") String  fileName, HttpServletResponse response) 
	{
		try
		{
			response.setHeader("Content-Disposition", "attachement;filename=\"" +fileName + "\"");
			response.setContentType("application/pdf");			
			File file = new File(fileName);			

			FileInputStream inputStream = new FileInputStream(file);
			byte[] outputBytes = new byte[(int) file.length()];
			inputStream.read(outputBytes);

			OutputStream oStream = response.getOutputStream();
			oStream.write(outputBytes, 0, outputBytes.length);
			oStream.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}
}