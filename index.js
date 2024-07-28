
    // function formvalidate(){
    //     let x = document.forms["myform"]["cname"].value;
    //     if(x == ""){
    //         alert("mandatory blanks to be filled");
    //         return false;
    //     }    
    // }

    // function check(){
    //    var x = document.getElementById(checkbox);
    //    cont 
    //    var text = document.getElementById(text).innerHTML = console.log(`your booking  ${option} service is successful`);
    // }



// options
    // function validate(){
    //     var window = document.getElementById("window");
    //     var text_window = "window service successfully done";
    //     var split =  document.getElementById("split");
    //    var   text_split = "split service successfully done";
    //     if(window.selected == true){
    //       document.getElementById("text").innerHTML = text_window;
    //     }
    //     else{
    //         document.getElementById("text").innerHTML = text_split;

    //     }
    //   }


    //   checkbox
//     function checkboxes() {
//         var cleaning = document.getElementById("cleaning");
//         var refill = document.getElementById("refill");
//         var repair = document.getElementById("repair");
//         var relocation = document.getElementById("relocation");
//         var filter = document.getElementById("filter");
//          for(checkboxes.checked == true){   
//         var x = checkboxes.checked;
//         console.log( x.value);
//     document.getElementById("text").innerHTML = `total for service is ${x.value}`

//     }
// }

// checkbox (i)
// function checkboxes(){
//     var i,
//     check = document.querySelectorAll('input[type=checkbox]');
// for(i = 0,i< check.lenght,i++){
//     var x = check(i).checked 
// if(x == true){
//     total = check(i).value
// }
// }
// function  validate(){
//   amount = 0;
// var x = [document.getElementById("cleaning"),
//           document.getElementById("refill"),
//          document.getElementById("filter"),
//          document.getElementById("repair"),
//          document.getElementById("relocation")
//          ]
//          if (x[i].checked == true) {
//          for(i=0;i<=x.length;i++){
            
//               amount += x[i].value;
//               alert(`the estimate service cost is ${amount}`);  
//             }
//          }
        //  document.getElementById("text").innerHTML = `the estimate service cost is ${amount}`;  
// let cname = document.getElementById("cname").value;
// console.log(cname);
// }
// ORIGINAL
// function  validate(){
//   amount = 0;
// var x = [(document.getElementById("cleaning")),
//           (document.getElementById("refill")),
//          document.getElementById("filter"),
//          document.getElementById("repair"),
//          document.getElementById("relocation")
//          ]
//          for(i=0;i<=x.length;i++){
//             if (x[i].checked == true) {
//               amount += x[i].value;
//               alert(`the estimate service cost is ${amount}`);  
//             }
//          }
//         }
function  validate(){
  event.preventDefault()
  amount = 0;
  count = 0;
  var x = [ (document.getElementById("cleaning")),
   (document.getElementById("refill")),
    (document.getElementById("filter")),
   ( document.getElementById("repair")),
     (document.getElementById("relocation"))
           ]
           for(i=0;i<=x.length-1;i++){
              if (x[i].checked == true) {
                amount = Number(amount) + Number( x[i].value);
                count = count +1;
                // alert(`the estimate service cost is ${amount}`);  
              }
            }
            if(count>1){
            document.getElementById("text02").innerHTML= `the estimate service cost is ${ 85/100*amount}` ;
            }
            else{
            document.getElementById("text02").innerHTML= `the estimate service cost is ${amount}` ;
            }
            // console.log(amount);
            
          }

          function acType(){
  event.preventDefault()

            var z =[
              document.getElementById("split"),
              document.getElementById("window")
            ]
            for(i=0;i<z.length;i++){
              if(z[i].selected == true){
                // alert(`${z[i].value}`)
            document.getElementById("text").innerHTML=`your booking for ${z[i].value} AC service is successful`;
              // console.log(z[i].value);
              } 

            }

          }