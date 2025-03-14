package lk.bitproject.roles.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import lk.bitproject.roles.model.Role;
import lk.bitproject.roles.model.RolesDao;




@RestController
@SpringBootApplication
public class RoleController {

    @Autowired //Automatically provides an instance of a class that implements this interface 
    private RolesDao roleDao; 
    
    @GetMapping(value = "/roles/alldata" , produces = "application/json")
    public List<Role> getAllData() {

       return roleDao.findAll();
    
    }
    

    @RequestMapping("/role")
    public ModelAndView getRole() {
        
        ModelAndView rolePage = new ModelAndView();
        rolePage.setViewName("role.html");

        return rolePage;
    }

    


}
