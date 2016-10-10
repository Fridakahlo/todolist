// (function(){


	"use strict";

	var tabValue= [];


$('#createdTache').on("click",function(){

	

		var todo = {

			value : $('#newTache').val(),
			status : false,
			nameList : null,
		

		}

		
		// permet d'envoyer un element vers un tableau 

		tabValue.push(todo);


		$('#affichList').append("<div class='tache'><input class='check' id='check"+tabValue.length+"'data-object='"+tabValue.length+"' type='checkbox'><div  id='"+tabValue.length+"' class='tacheContent'>"+tabValue[tabValue.length-1].value+"</div></div>");


		$('.check').change(function(){



				if(checked("#check"+$(this).data("object"))){

					
					tabValue[$(this).data("object")-1].status = true ;
					$("#"+$(this).data("object")).addClass('rayer');

			
				}

				if(!checked("#check"+$(this).data("object"))){

					tabValue[$(this).data("object")-1].status = false ;
					$("#"+$(this).data("object")).removeClass('rayer');


				}


			});



		$("#checkEffect").click(function(){
			$('#affichList').html("");


			for(var i=0; i<tabValue.length; i++){
				if (tabValue[i].status === true){

					$('#affichList').append("<div class='tache'><input class='check'  type='checkbox' checked><div class='tacheContent'>"+tabValue[i].value+"</div></div>");

				}


			}




		});

		$("#checkAll").click(function(){
			$('#affichList').html("");


			for(var i=0; i<tabValue.length; i++){
					if (tabValue[i].status === true){
						$('#affichList').append("<div class='tache'><input class='check'  type='checkbox' checked><div class='tacheContent'>"+tabValue[i].value+"</div></div>");
					}

					if(tabValue[i].status === false){
						$('#affichList').append("<div class='tache'><input class='check'  type='checkbox'><div class='tacheContent'>"+tabValue[i].value+"</div></div>");
					}


			}


		});

		


	


});





	




	

	function checked (check){
		return $(check).is(":checked");

	}



	

	


	





		


// })();


