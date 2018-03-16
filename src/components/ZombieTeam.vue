
<template>
<div>
<h1>CHOOSE YOUR TEAM</h1>
<h2>When the Apocalypse hits, who's on your side?</h2>
<form v-on:submit.prevent="addMember">
      <input type="text" v-model="name">
      <label>Name</label><br/>
      <input type="text" v-model="weapon">
      <label>Weapon of Choice</label> <br/>
      <input type="number" v-model="rating">
      <label id="rating-label">Rating</label> <br/>
      <input type="text" v-model="imageUrl">
      <label>Image URL</label> <br/>
      <button type="submit">Add</button>
    </form>
<table>
  <th></th>
  <th class="nameCell">Member Name</th>
  <th class="weaponCell">Weapon</th>
  <th class="ratingCell">Rating</th>
  <th class="increaseCell">Up Rating</th>
  <th class="decreaseCell">Down Rating</th>
  <th></th>
  <tr v-for="teamMember in team">
    <td><img :src="teamMember.imageUrl"/>
    <td class="nameCell"> {{teamMember.name}} </td>
    <td class="weaponCell">{{teamMember.weapon}} </td>
    <td class="ratingCell">{{teamMember.rating}}</td>
    <td class="increaseCell"><button class="fa fa-angle-double-up" v-on:click="increaseRating(teamMember)"></button></td>
    <td class="decreaseCell"><button class="fa fa-angle-double-down" v-on:click="decreaseRating(teamMember)"></button></td>
    <td><button v-on:click="deleteMember(teamMember)">Remove</button></td>
  </tr>
</table>

<h2 v-if="numMembers >= 4">TEAM FULL</h2>
</div>

  
</template>

<script>

import axios from 'axios';
export default {
  name: 'ZombieTeam',
   data () {
     return {
       team: [],
       name: '',
       imageUrl: '',
       weapon: '',
       rating: 0,
     }
   },
   computed: {
     numMembers: function() {
     	return this.team.length;
     }
   },
   created: function() {
     this.getTeam();
   },
   methods: {
     getTeam: function() {
       axios.get("/api/team").then(response => {
	 this.team = response.data;
	 return true;
       }).catch(err => {
       });
     },
     addMember: function() {
     if (!(this.numMembers >= 4)) {
       axios.post("/api/team", {
	name: this.name,
	weapon: this.weapon,
	rating: this.rating,
	imageUrl: this.imageUrl
      }).then(response => {
	this.name = "";
	this.weapon = "";
	this.rating = 0;
	this.imageUrl = ""
	this.getTeam();
	return true;
      }).catch(err => {
      });
      }
     },
     increaseRating: function(member) {
     let newRating = member.rating + 1;
     axios.put("/api/team/" + member.id, {
	rating: newRating
      }).then(response => {
        this.getTeam();
	return true;
      }).catch(err => {
      });
     },
     decreaseRating: function(member) {
       let newRating = member.rating - 1;
     axios.put("/api/team/" + member.id, {
        rating: newRating
      }).then(response => {
        this.getTeam();
        return true;
      }).catch(err => {
      });

     },
     deleteMember: function(member) {
      axios.delete("/api/team/" + member.id).then(response => {
	this.getTeam();
	return true;
      }).catch(err => {
      });
     },
   }
}
</script>

<style>
img {
   height: 75px;
   width: 75px;
   border-radius: 50%;
}

#rating-label {
   margin-left: 60px;
}

div {
  color: red;
  width: 100%;
  }
h1 {
   font-family: 'Creepster', cursive;
   font-size: 70px;
   text-align: center;
   }
   h2 {
   font-family: 'Creepster', cursive;
   font-size: 35px;
   text-align: center;
   }
form {
width: 75%;
margin-left: 40%;
margin-bottom: 30px;
}

table {
width: 60%;
margin-left: 20%;
}

.nameCell {
text-align: left;

}

.weaponCell {
text-align: left;

}

.ratingCell {
text-align: center;
}

.increaseCell {
text-align: center;
}

.decreaseCell {
text-align: center;
}


</style>
