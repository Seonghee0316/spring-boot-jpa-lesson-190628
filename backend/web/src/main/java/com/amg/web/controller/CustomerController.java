package com.amg.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.amg.web.common.lambda.ISupplier;
import com.amg.web.common.util.Printer;
import com.amg.web.domain.CustomerDTO;
import com.amg.web.entities.Customer;
import com.amg.web.repositories.CustomerRepository;
import com.amg.web.service.CustomerService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerDTO customer;
    @Autowired
    Printer p;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    CustomerRepository repo;

    @Bean
    public ModelMapper modelmapper(){
        return new ModelMapper();
    }


    @GetMapping("/count")
    public Long count() {
        System.out.println("========count()에 들어옴=========");
        return customerService.count();
    }

    /*
     * @DeleteMapping("/{id}") public void delete(CustomerDTO dto) {
     * customerService.delete(null); }
     * 
     * @DeleteMapping("/{id}") public void deleteAll() {
     * customerService.deleteAll(); }
     * 
     * @DeleteMapping("/{id}") public void deleteAll(Iterable<CustomerDTO> dtos) {
     * customerService.deleteAll(null); }
     */

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id) {
        System.out.println("넘어온 id값: " + id);
        Long pid = Long.parseLong(id);
        System.out.println("parse된 id값: " + pid);
        customerService.deleteById(pid);
    }

    @GetMapping("/exists/{id}")
    public boolean existsById(@PathVariable String id) {
        System.out.println("existsById " + id);
        Long l = Long.parseLong(id);
        return customerService.existsById(l);
    }

    @GetMapping("")
    public Iterable<CustomerDTO> findAll() {
        Iterable<Customer> entities = customerService.findAll();
        List<CustomerDTO> list = new ArrayList<>();
        for(Customer s: entities){
            CustomerDTO cust = modelMapper.map(s, CustomerDTO.class);
            list.add(cust);
        }
        return list;
    }

    // @GetMapping("/{id}")
    // public Iterable<CustomerDTO> findAllById(Iterable<Long> ids) {
    // Iterable<Customer> entity = customerService.findAllById(ids);
    // return null;
    // }

    @GetMapping("/{id}")
    public CustomerDTO findById(@PathVariable String id) {
        System.out.println("findById 들어온 아이디: " +id);
        Customer entity = customerService
                            .findById(Long.parseLong(id))
                            .orElseThrow(EntityNotFoundException::new);

        System.out.println(">>>>"+entity.toString());
        CustomerDTO c = modelMapper.map(entity, CustomerDTO.class);
        System.out.println("조회결과:" + c.toString());
        return c;
    }

    @PostMapping("")
    public  HashMap<String,String> save(@RequestBody CustomerDTO dto) {
        
        System.out.println("회원가입 "+dto.toString());
        HashMap<String,String> map = new HashMap<>();
        Customer entity = new Customer();
        entity.setAddress(dto.getAddress());
        entity.setCity(dto.getCity());
        entity.setCustomerId(dto.getCustomerId());
        entity.setCustomerName(dto.getCustomerName());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setPhoto(dto.getPhoto());
        entity.setPostalcode(dto.getPostalcode());
        entity.setSsn(dto.getSsn());
        
        // Customer entity = modelMapper.map(dto, Customer.class);
        System.out.println("엔티티로 바뀐 정보:" + entity.toString());
        // Customer entity = 
        // // Customer entity = modelMapper.map(dto, Customer.class);
        // System.out.println("엔ㅌ티로 바뀐 정보: " + entity.toString());
        customerService.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

    /*
     * @PostMapping("") public Iterable<Customer> saveAll(Iterable<CustomerDTO> dto)
     * { return customerService.saveAll(null); }
     */

/*      @GetMapping("/login/{id}/{pwd}")
     public HashMap<String,String> login(@RequestBody CustomerDTO dto){
        // Customer entity = customerService
        //                     .login(Long.parseLong(id))
        //                     .orElseThrow(EntityNotFoundException::new);
        Customer entity = modelMapper.map(dto, Customer.class);
        entity.setCustomerId(dto.getCustomerId());
        entity.setPassword(dto.getPassword());
        customerService.login(entity);

        // System.out.println(">>>>"+entity.toString());
        CustomerDTO c = modelMapper.map(entity, CustomerDTO.class);

        HashMap<String,String> map = new HashMap<>();
        if(c != null){
            map.put("result", c.getCustomerName());
        } else {
            map.put("result", "Fail");
        }
        return map;
     } */

     @PostMapping("/login")
     public CustomerDTO login(@RequestBody CustomerDTO dto){
        System.out.println("로그인 집합");
        System.out.println("ID: " + dto.getCustomerId());
        System.out.println("PW: " + dto.getPassword());

        //재활용 하지 않겠다.
        ISupplier fx = (()-> {
                 return repo.findByCustomerIdAndPassword(dto.getCustomerId(), 
                 dto.getPassword());

         });
         return (CustomerDTO)fx.get();
     }
}