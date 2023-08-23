AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"
        
        var orderSummaryButton=document.getElementById("order-summary-button")
        var orderButton=document.getElementById("order-button")

        orderButton.addEventListener("click", () => {
            swal({
              icon: "https://i.imgur.com/4NZ6uLY.jpg",
              title: "Thanks For Order !",
              text: "  ",
              timer: 2000,
              buttons: false
            });
          });
      
          orderSummaryButton.addEventListener("click", () => {
            swal({
              icon: "warning",
              title: "Order Summary",
              text: "Work In Progress"
            });
          });      
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    },
    getAllToys: async function() {
      return await firebase
        .firestore()
        .collection("toys")
        .get()
        .then(snap => {
          return snap.docs.map(doc => doc.data());
        });
    },
})
