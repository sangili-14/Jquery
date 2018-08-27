$(document).ready(function()
{
	var circle=$('#circle');
    $("#mu").click(function()
    {
    	circle.animate({
    		marginTop: "-=50px"
    	},500);
    });
    $("#mr").click(function()
    {
    	circle.animate({
    		marginLeft: "+=50px"
    	},500);
    });
    $("#md").click(function()
    {
    	circle.animate({
    		marginTop: "+=50px"
    	},500);
    });
    $("#ml").click(function()
    {
    	circle.animate({
    		marginLeft: "-=50px"
    	},500);
    });
});