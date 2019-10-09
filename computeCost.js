

 function updateSubTotal(buttonName, quantityID, subTotalID){

    var radioButtons = document.getElementsByName(buttonName);

    var price = 0;

    for (var i = 0, length = radioButtons.length; i < length; i++){
      if (radioButtons[i].checked){
        price = radioButtons[i].value;
      break;
      }
    }

    document.getElementById(subTotalID).value = price * document.getElementById(quantityID).value;
  }

//   function computeCost()
// {
// 	//Get item quantity
// 	var justJaveQty= document.getElementById("justJaveQty").value;
// 	var CafeAuLaitQty= document.getElementById("CafeAuLaitQty").value;
// 	var IcedCappQty= document.getElementById("IcedCappQty").value;


// 	//radio button switch price 
// 	var 


// 	//compute cost 
// 	document.getElementById("totalCost")=(justJaveQty*justJaveQtyPrc 
// 											+ CafeAuLaitQty*CafeAuLaitPrc
// 											+IcedCappQty+IcedCappPrc) ;
// }

