<template>
  <div>
    <Nav></Nav>
    <form>
      <div class="form-group">
        <label for="id">ID:</label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Enter email"
          v-model="customerId"
        />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          placeholder="Enter password"
          v-model="password"
        />
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <button class="btn btn-default" @click="login">login</button>
      <button class="btn btn-default" @click="count">count</button>
      <button class="btn btn-default" @click="deleteById">deleteById</button>
      <button class="btn btn-default" @click="existsById">existsById</button>
      <button class="btn btn-default" @click="findAll">findAll</button>
      <button class="btn btn-default" @click="findById">findById</button>
      <button class="btn btn-default" @click="save">save</button>
      <button class="btn btn-default" @click="login">login</button>

      <!-- <button  @submit="info" type="submit" class="btn btn-default">Submit</button> -->
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
import Footer from "@/components/common/Footer.vue";
import axios from "axios";

export default {
  components: {
    Nav,
    Footer
  },

  data() {
    return {
      context: "http://localhost:9000/customers",
      customerId: "abc",
      customerName: "김키위",
      password: "1234",
      ssn: "9999",
      phone: "0220202",
      city: "000",
      address: "서울시 종로구",
      postalcode: "1234",
      photo: "dddd"
    };
  },

  //하나로 연결해야함.
  methods: {
    count() {
      axios
        .get(`${this.context}/count`)
        .then(res => {
          alert(`count() SUCCESS : ${res.data}`);
        })
        .catch(e => {
          alert("ERROR");
        });
    },
    deleteById() {
      axios
        .delete(`${this.context}/1`)
        .then(res => {
          alert(`SUCCESS2  : ${res.data}`);
        })
        .catch(e => {
          alert("ERROR");
        });
    },
    existsById() {
      axios
        .get(`${this.context}/exists/1`)
        .then(res => {
          alert(`existsById() SUCCESS : ${res.data}`);
        })
        .catch(e => {
          alert("ERROR");
        });
    },
    findAll() {
      axios
        .get(`${this.context}`)
        .then(res => {
          alert(`findAll() : ${res.data[0].customerName}`);
        })
        .catch(e => {
          alert("ERROR");
        });
    },
    findById() {
      axios
        .get(`${this.context}/1`)
        .then(res => {
          alert(`findById() SUCCESS : ${res.data.customerName}`);
        })
        .catch(e => {
          alert("ERROR");
        });
    },
    save() {
      let data = {
        id: 40,
        customerId: this.customerId,
        customerName: this.customerName,
        password: this.password,
        ssn: this.ssn,
        phone: this.phone,
        city: this.city,
        address: this.address,
        postalcode: this.postalcode,
        photo: this.photo
      };

      let headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege.."
      };

      axios
        .post(`${this.context}`, JSON.stringify(data), { headers: headers })
        .then(res => {
          alert(`SUCCESS2 : ${res.data}`);
        })
        .catch(e => {
          alert("ERROR");
        });
    },
    login() {
      let data = {
        customerId: this.customerId,
        password: this.password
      };

      let headers = {
        "Content-Type": "application/json",
         'Authorization' : 'JWT fefege..'
      };

      axios
        .post(`${this.context}/login`, JSON.stringify(data), {
          headers: headers
        })
        .then(res => {
          alert(`login SUCCESS : ${res.data.customerId}`);
        })
        .catch(e => {
          alert("ERROR");
        });
    }
  }
};

// submit누르면 alert뜸 @submit id = '' , pw = ''
</script>

<style scoped>
</style>