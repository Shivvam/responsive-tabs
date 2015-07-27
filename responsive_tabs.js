$(document).load($(window).bind("resize", CheckWin));

function CheckWin(){
    $('.tabs-head').parent().remove();
    if (window.matchMedia('(max-width: 767px)').matches) {
        init_tabs(true);
    } else {
        init_tabs(false);
    }
};


$(document).ready(function(){
    CheckWin();
});


function init_tabs(tab_flag)
{
    $('.tabs').append('<section><div class="tabs-head"></div><div class="tabs-content"></div></section>');
    if(tab_flag)
    {
        tab_select();
    }else{
        tab_normal();
    }
}

$('.tab-head').click(function(){
    $('.tabs-content').html($(this).next().html());
});


function tab_select(){
    $('.tabs-head').html('<select class="select_tab"></select>');

    $('.tab>.tab-head').each(function(){
        $('.tabs-head>select').append('<option value="'+$(this).next().html()+'" default="'+$(this).attr("default")+'">'+$(this).html()+'</option>');
    });
    $('.tabs-head>select>option[default=true]').prop('selected', true);
    $('.tabs-content').html($('.tabs-head>select>option:selected').val());

    $('.select_tab').change(function(){
        $('.tabs-content').html($(this).val());
    });

}

function tab_normal(){

    $('.tab>.tab-head').each(function(){
        $('.tabs-head').append($(this).clone(),$(this).next().clone());
    });
    $('.tab-head[default=true]').addClass("active");
    $('.tabs-content').html($('.tab-head[default=true]').next().html());
    $('.tab-head').click(function(){
        $('.tab-head').removeClass("active");
        $('.tabs-content').html($(this).next().html());
        $(this).addClass("active");
    });
    
    

}
