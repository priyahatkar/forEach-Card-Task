console.log('hellooo js');

let cl = console.log;

let users = [
    {
      userId: 1,
      it: 2,
      title: "who is being",
      body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
    }
    
  ]

  let infouser =document.getElementById("infouser");

  let result = `<div class="col-mb-4">`;

  users.forEach(function(user,i){
    result += `
         <div class="card-header fs-3 text-uppercase">${user.title}</div>
         <div class="card-body text-capitalize">${user.body}</div>
         <div class="card-footer text-capitalize">userId: ${user.userId}, it: ${user.it}</div>
    `
  })

  result +="</div>";


  infouser.innerHTML=result;


  let user2 =[
    {
        userId: 1,
        it: 3,
        title: "she repels troubles as if she were training, whoever she is",
        body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
      }
  ]

  let userinfo =document.getElementById("userinfo");

  let result1 = `<div class="col-mb-4">`;

  user2.forEach(function(info,i){
    result1 += `
         <div class="card-header fs-3 text-uppercase">${info.title}</div>
         <div class="card-body text-capitalize">${info.body}</div>
         <div class="card-footer text-capitalize">userId: ${info.userId}, it: ${info.it}</div>
    `
  })

  result1 +="</div>";


  userinfo.innerHTML=result1;

  let user3=[
    {
        userId: 1,
        it: 4,
        title: "and he is blinded",
        body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
      }
  ]

  let info =document.getElementById("info");

  let result2 = `<div class="col-mb-4">`;

  user3.forEach(function(data,i){
    result2 += `
         <div class="card-header fs-3 text-uppercase">${data.title}</div>
         <div class="card-body text-capitalize">${data.body}</div>
         <div class="card-footer text-capitalize">userId: ${data.userId}, it: ${data.it}</div>
    `
  })

  result2 +="</div>";


  info.innerHTML=result2;

  let user4=[
    {
        userId: 1,
        it: 5,
        title: "they don't know what they hate",
        body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held"
      }
  ]

  let data =document.getElementById("data");

  let result3 = `<div class="col-mb-4">`;

  user4.forEach(function(data,i){
    result3 += `
         <div class="card-header fs-3 text-uppercase">${data.title}</div>
         <div class="card-body text-capitalize">${data.body}</div>
         <div class="card-footer text-capitalize">userId: ${data.userId}, it: ${data.it}</div>
    `
  })

  result3 +="</div>";


  data.innerHTML=result3;