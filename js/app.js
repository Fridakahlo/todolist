


	"use strict";


	var tabVal = localStorage.tabValue;


	
	if(localStorage.tabValue === undefined){

		var tabVal = [];
		
		var tab = JSON.stringify(tabVal);
		localStorage.setItem("tabValue",tab);

	}

	var tabValue = [];

	for(var i=0;i < (JSON.parse(localStorage.tabValue)).length;i++){



		tabValue.push(JSON.parse(localStorage.tabValue)[i]);


	}





	for(var i = 0; i < tabValue.length;i++){

		if(tabValue[i].status === false){

			console.log('false')

			$('#affichList').append("<div  id='div"+tabValue[i].number+"' class='tache'><input class='check' id='check"+tabValue[i].number+"' data-object='"+tabValue[i].number+"'  type='checkbox'><div  id='"+tabValue[i].number+"' class='tacheContent'>"+tabValue[i].value+"</div></div>");
			
		}

		if(tabValue[i].status === true){

			console.log('true')

			$('#affichList').append("<div  id='div"+tabValue[i].number+"' class='tache'><input class='check' id='check"+tabValue[i].number+"' data-object='"+tabValue[i].number+"' type='checkbox' checked><div  id='"+tabValue[i].number+"' class='tacheContent'>"+tabValue[i].value+"</div></div>");
			$("#"+tabValue[i].number).addClass('rayer');
		}
	}	



	$('#createdTache').click(function(){

	
	


		var todo = {

			value : $('#newTache').val(),
			status : false,
			nameList : null,
			id : 'div'+((JSON.parse(localStorage.tabValue)).length+1),
			number : ((JSON.parse(localStorage.tabValue)).length+1),

		}



		if($('#newTache').val()){

			tabValue.push(todo);

			var tab = JSON.stringify(tabValue);
			localStorage.setItem("tabValue",tab);

			$('#affichList').append("<div  id='div"+(JSON.parse(localStorage.tabValue)).length+"' class='tache'><input class='check' id='check"+(JSON.parse(localStorage.tabValue)).length+"'data-object='"+(JSON.parse(localStorage.tabValue)).length+"' type='checkbox'><div  id='"+(JSON.parse(localStorage.tabValue)).length+"' class='tacheContent'>"+(JSON.parse(localStorage.tabValue))[(JSON.parse(localStorage.tabValue)).length-1].value+"</div></div>");


		}

			console.log(tabVal);
	
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

		$('.check').click(function(){

			console.log($(this).data("object"));

			if(checked("#check"+$(this).data("object"))){

				tabValue[$(this).data("object")-1].status = true ;
				$("#"+$(this).data("object")).addClass('rayer');

				var tab = JSON.stringify(tabValue);
				localStorage.setItem("tabValue",tab);


			}

			if(!checked("#check"+$(this).data("object"))){

				tabValue[$(this).data("object")-1].status = false ;
				$("#"+$(this).data("object")).removeClass('rayer');

				var tab = JSON.stringify(tabValue);
				localStorage.setItem("tabValue",tab);
			}

		});


	function checked (check){
	return $(check).is(":checked");

	}




