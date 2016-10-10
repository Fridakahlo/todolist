// (function(){


	"use strict";

	var tabValue= [];


	$('#createdTache').click(function(){



		var todo = {

			value : $('#newTache').val(),
			status : false,
			nameList : null,
			id : 'div'+(tabValue.length+1),
			


		}

		
		// permet d'envoyer un element vers un tableau 

		tabValue.push(todo);


		$('#affichList').append("<div  id='div"+tabValue.length+"' class='tache'><input class='check' id='check"+tabValue.length+"'data-object='"+tabValue.length+"' type='checkbox'><div  id='"+tabValue.length+"' class='tacheContent'>"+tabValue[tabValue.length-1].value+"</div></div>");

 
		$('.check').click(function(){



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

			for(var i =0;i < tabValue.length;i++){

				if (tabValue[i].status === false){

					$('#'+tabValue[i].id).addClass('displayNone');

				

				}
				if (tabValue[i].status === true){

					$('#'+tabValue[i].id).removeClass('displayNone');

				};

			}

		


		});

		$("#checkAll").click(function(){

			for(var i =0;i < tabValue.length;i++){

				$('#'+tabValue[i].id).removeClass('displayNone');

				
			}

			
		});

		$("#checkTodo").click(function(){

			for(var i =0;i < tabValue.length;i++){

				if (tabValue[i].status === true){

					$('#'+tabValue[i].id).addClass('displayNone');

				}
				if (tabValue[i].status === false){
					$('#'+tabValue[i].id).removeClass('displayNone');

				}

			}

		


		});


	});


	





	




	

	function checked (check){
		return $(check).is(":checked");

	}



	

	


	








// })();


