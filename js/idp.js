$(document).ready(function () {
	//Roll on Page load
    $('.idpAnimation #brust-stroke-circle').addClass('rollmeIDP');
	
    $('.idpAnimation g.rollover').on('mouseover', function () {
        //stop runner
        clearInterval(idpAnimationRun);
        $('.idpAnimation #brust-stroke-circle').removeClass('rollmeIDP');
        var getID = $(this).attr("id");
        var hoverState = getID + '-hover';
        $('.idpActive').hide(); $('#' + hoverState).show();
        descShowIDP(getID);
    });

    $('.idpAnimation .idpActive').on('mouseout', function () {
        if ($('.idpAnimation #brust-stroke-circle:hover, .idpAnimation #white-circle:hover, .idpAnimation .innerContainer:hover').length != 0) {
            return true;
        }
        $('.idpAnimation .innerContainer, .idpAnimation .idpActive').hide();
        $('.idpAnimation #logo').show();
        $('.idpAnimation #brust-stroke-circle').addClass('rollmeIDP');
    });

    function descShowIDP(datapack) {
        $('.idpAnimation .innerContainer, .idpAnimation #logo').hide();
        var GetDesc = datapack + '-copy';
        $('.idpAnimation .' + GetDesc).show();
    }

    
    //Show options are active
    var childidpAnimationLength = $('.idpAnimation .rollover').length;
    var runneridpAnimation = 0;
    var idpAnimationRun = setInterval(runIDP, 1000);
    var flapTrigger = 0;

    function runIDP() {
		
        if (flapTrigger < 2) {
            $('.idpAnimation #logo').show();
            $('.idpAnimation .innerContainer').hide();
            flapTrigger++;			
        }
        else {
            if (runneridpAnimation === childidpAnimationLength) {
                runneridpAnimation = 0;
                flapTrigger = 0;
                $('.idpAnimation .idpActive, .idpAnimation .innerContainer').hide();
                $('.idpAnimation #logo').show();
            }
            else {
                $('.idpAnimation .idpActive, .idpAnimation .innerContainer, .idpAnimation #logo').hide();
                $('.idpAnimation .idpActive:eq( ' + runneridpAnimation + ' )').show();
                var getID = $('.idpAnimation .rollover:eq( ' + runneridpAnimation + ' )').attr('id');
                descShowIDP(getID);
                runneridpAnimation++;
            }
        }
    };
});