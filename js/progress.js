
//* 초기 프로그레스바 넓이, 높이
var cp_width = 50;
var cp_height = 50;

//* 초기 사용자 윈도우 창(넓이, 높이)
var doc_width = document.documentElement.clientWidth ;
var doc_height = document.documentElement.clientHeight ;

var cp_html_code = "<div id='canvas_layout'>"
    +"<div id='cp_layout' style='display: inline-block;'>"
    +"<canvas id='canvas_cp'" + "width=" + cp_width + " height=" + cp_height +">"
    +"</canvas>"
    +"</div>"

    +"<div id='cp_textlayout'></div>"
    +"</div>";

document.write(cp_html_code);

//* 프로그레스바 감싸고 있는 레이아웃 css정의
var cp_outer_layout_height = 50;
var cp_outer_layout_width = 200;
var cp_outer_layout_backColor = '#eeeeee';

document.getElementById('canvas_layout').style.position='absolute';
document.getElementById('canvas_layout').style.display='none';
document.getElementById('canvas_layout').style.height = cp_outer_layout_height+'px';
document.getElementById('canvas_layout').style.width = cp_outer_layout_width+'px';
document.getElementById('canvas_layout').style.background = cp_outer_layout_backColor;
document.getElementById('canvas_layout').style.padding = '15px 75px 15px 10px';
document.getElementById('canvas_layout').style.opacity = '0.8';
document.getElementById('canvas_layout').style.borderRadius = '5px';
document.getElementById('canvas_layout').style.zIndex = '2';


//* 프로그레스바 오른쪽에 위치한 텍스트 레이아웃 css정의
document.getElementById('cp_textlayout').style.position='absolute';
document.getElementById('cp_textlayout').style.lineHeight = cp_outer_layout_height -5 +'px';
document.getElementById('cp_textlayout').style.display='inline-block';
document.getElementById('cp_textlayout').style.marginLeft = '15px';
document.getElementById('cp_textlayout').style.verticalAlign='top';
document.getElementById('cp_textlayout').style.zIndex='2';




var stop_flag = false;
var cp_line_bold = '3';
var pre_deegres = 0;

//* 프로그레스바 레이아웃 표시 및 진행.
function draw_cp() {

    document.getElementById('canvas_layout').style.display = 'block';
    var canvas_cp = document.getElementById('canvas_cp'),
        cp = canvas_cp.getContext("2d");
    var posX = canvas_cp.width / 2,
        posY = canvas_cp.height / 2,
        fps = 2;

    canvas_cp.lineCap = 'round';
    arcMove();

    function arcMove() {
        var deegres = 0;
        if(pre_deegres != 0) {
            //deegres = pre_deegres;
        }
        var acrInterval = setInterval (function() {

            deegres += 1;
            cp.clearRect( 0, 0, canvas_cp.width, canvas_cp.height );

            //* 프로그레스바 틀 draw 부분
            cp.beginPath();
            cp.arc( posX, posY, 20, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
            cp.strokeStyle = '#ffffff';
            cp.lineWidth = cp_line_bold;
            cp.stroke();

            //* 프로그레스바 진행바 draw 부분
            cp.beginPath();
            cp.strokeStyle = 'rgb(255, 124, 140)';
            cp.lineWidth = cp_line_bold;
            cp.arc( posX, posY, 20, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
            cp.stroke();
            if( deegres >= 360 ){
                clearInterval(acrInterval);
                relay_cp();
            }
            if(stop_flag == true) {
                clearInterval(acrInterval);
            }
        }, fps);
    }
}

//* 프로그레스바 재진행
function relay_cp() {
    draw_cp();
    stop_flag=false;
}

//* 프로그레스바 일시정지
function pause_cp() {
    stop_flag = true;
}

//* 프로그레스바 없애기
function hide_cp() {
    stop_flag=true;
    document.getElementById('canvas_layout').style.display= 'none';
}




//* 사용자 설정 값 셋팅 함수.
function init_setting_cp(cp_style_obj){
    var outer_layout_height = cp_style_obj.outer_layout_height;
    var outer_layout_width = cp_style_obj.outer_layout_width;
    var outer_layout_backColor = cp_style_obj.outer_layout_backColor;

    var inner_cp_line_bold = cp_style_obj.inner_cp_line_bold;
    var inner_cp_text_value = cp_style_obj.inner_text_value;


    //* 원형프로그레스바 외부 레이아웃 높이(=height)
    if(outer_layout_height != null && outer_layout_height != '' && parseInt(outer_layout_height) >50 ){
        document.getElementById('canvas_layout').style.height = outer_layout_height+'px';
    }else{
        document.getElementById('canvas_layout').style.height = '50px';
        outer_layout_height = '50';
    }

    //* 원형프로그레스바 외부 레이아웃 넓이(=width)
    if(outer_layout_width != null && outer_layout_width != '' && parseInt(outer_layout_width) > 200) {
        document.getElementById('canvas_layout').style.width = outer_layout_width+'px';
    }else{
        document.getElementById('canvas_layout').style.width = '200px';
        outer_layout_width = '200';
    }

    //* 원형프로그레스바 외부 레이아웃 백그라운드(=background)
    if(outer_layout_backColor != null && outer_layout_backColor != '') {
        document.getElementById('canvas_layout').style.background = outer_layout_backColor;
    }else{
        document.getElementById('canvas_layout').style.width = '#eeeeee';
    }

    //* 원형프로그레스바 선 굵기
    if(inner_cp_line_bold != null && inner_cp_line_bold != '' && parseInt(inner_cp_line_bold) >= 3) {
        cp_line_bold = inner_cp_line_bold;
    }else{
        cp_line_bold = '3';
    }
    document.getElementById('cp_textlayout').innerHTML = inner_cp_text_value;
    console.log(inner_cp_text_value);

    document.getElementById('canvas_layout').style.top = (doc_height - parseInt(outer_layout_height)) / 2 +'px';
    document.getElementById('canvas_layout').style.left = (doc_width - (parseInt(outer_layout_width)+80)) / 2 +'px';

    //draw_cp();

    //* 반응형 처리(사용자 윈도우 창 기준)
    window.addEventListener('resize', function() {
        var m_doc_width = document.documentElement.clientWidth;
        var m_doc_height = document.documentElement.clientHeight;

        document.getElementById('canvas_layout').style.top = (m_doc_height - parseInt(outer_layout_height)) / 2 +'px';
        document.getElementById('canvas_layout').style.left = (m_doc_width - (parseInt(outer_layout_width)+80)) / 2 +'px';
    })

}
