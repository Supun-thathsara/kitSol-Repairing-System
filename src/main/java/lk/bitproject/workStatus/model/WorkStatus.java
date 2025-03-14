package lk.bitproject.workStatus.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="work_status") 

@Data // generates getters and setters
@AllArgsConstructor // generates constructor with all arguments
@NoArgsConstructor // generates default constructor

public class WorkStatus {
    
    @Id //denotes below attribute is a primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //denotes below attribute is Auto Increment
    @Column(name = "id")
    private Integer id; 
    
    @Column(name = "name")
    private String name;     

}