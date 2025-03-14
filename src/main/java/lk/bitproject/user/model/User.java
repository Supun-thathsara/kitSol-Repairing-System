package lk.bitproject.user.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lk.bitproject.roles.model.Role;
import lk.bitproject.workStatus.model.WorkStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name ="user") 

@Data // generates getters and setters
@AllArgsConstructor // generates constructor with all arguments
@NoArgsConstructor // generates default constructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_name")
    @Length(max = 8)
    @NonNull
    private String user_name;
    
    @Column(name = "calling_name")
    @Length(max = 8)
    @NonNull
    private String calling_name;  
    
    @Column(name = "nic", unique = true)
    @Length(max = 12 , min = 10)
    @NonNull
    private String nic;

    @NonNull
    private LocalDate dob; 
    
    @Column(name = "email")
    @Length(max = 60)
    @NonNull
    private String email;
    
    @Column(name = "mobile_number")
    @Length(max = 10 , min = 10)
    @NonNull
    private String mobile_number;

    @Column(name = "land_number")
    @Length(max = 10 , min = 10)
    private String land_number; 
    
    @Column(name = "contact_via")
    @Length(max = 10)
    @NonNull
    private String contact_via;
    
    @Column(name = "gender")
    @Length(max = 5)
    @NonNull
    private String gender;
    
    @Column(name = "address")
    @Length(max = 120)
    @NonNull
    private String address; 
    
    @Column(name = "notes")
    private String notes;
    
    @Column(name = "added_datetime")
    @NonNull
    private LocalDateTime added_datetime;

    @Column(name = "updated_datetime")
    private LocalDateTime updated_datetime;

    @Column(name = "delete_datetime")
    private LocalDateTime delete_datetime; 
    
    @Column(name = "added_user")
    @NonNull
    private Integer added_user; 
    
    @Column(name = "updated_user")
    private Integer updated_user;
    
    @Column(name = "deleted_user")
    private Integer deleted_user;
    
    
    @ManyToOne
    @JoinColumn(name = "role_id" , referencedColumnName = "id")
    private Role role_id;  


    @ManyToOne
    @JoinColumn(name = "work_status_id" , referencedColumnName = "id")
    private WorkStatus Work_Status_id; 
  
}
