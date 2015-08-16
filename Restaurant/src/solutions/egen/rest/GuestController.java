package solutions.egen.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;


import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import solutions.egen.dao.GuestDAO;
import solutions.egen.exceptions.AppException;
import solutions.egen.model.Guest;

@Path("/guest")
public class GuestController {

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getAll(){
		
		AppResponse resp = new AppResponse();
		
		try {
			GuestDAO dao = new GuestDAO();
			List<Guest> guestlist = dao.getAll();
			resp.setPayload(guestlist);
			} catch (AppException e) {
			e.printStackTrace();
			resp.setStatus(AppResponse.ERROR);
			resp.setMessage(e.getMessage());
		}
		return resp;
	}
	
	@GET
	@Path("/get/{ID}")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getGuest(@PathParam("ID")int guestId){
		
		AppResponse resp = new AppResponse();
		
		try {
			GuestDAO dao = new GuestDAO();
			Guest gue = dao.getPerson(guestId);
			resp.setPayload(gue);
			} catch (AppException e) {
			e.printStackTrace();
			resp.setStatus(AppResponse.ERROR);
			resp.setMessage(e.getMessage());
		}
		return resp;
	}
	
	@GET
	@Path("/add")
	public String addGuest(){
		return "added";
	}
}
