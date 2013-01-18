if(tick==0){ P=1000;
  OpenCanvas('S',510,300);
  S.clear();
  F="http://marley.spb.ru/mult/files/";
  rover=F+"rover.png";
  landscape=F+"mars.jpg";

  v=5;
  rover_x=100;
  rover_y=60;
  rover_w=0;
  rover_h=0;
  engine=0; //двигатель
  flag=0; //флаг стороны движения
  //flag1=0;//флаг для фото
  puts("Сделайте красивое фото для базы!")
}
else
{
  if(engine==1)
  { 
    switch(flag){
      case 0:{rover=F+'rover_u.png';
        if(rover_y>5){rover_y=rover_y-v; break;}else{break;}}
      case 1:{rover=F+'rover_d.png';
        if(rover_y<265){rover_y=rover_y+v; break;}else{break;}}
      case 2:{rover=F+'rover_r.png';
        if(rover_x>5){rover_x=rover_x-v; break;}else{break;}}
      case 3:{rover=F+'rover.png';
        if(rover_x<470){rover_x=rover_x+v; break;}else{break;}}
      case 4:{ if(rover_y>5){
        foto1=F+'mars_1.jpg';
        S.paint();
        S.drawImage(foto1,0,0,510,296);
        puts("У Вас получился обалденный снимок!");}
             else{break;}          

      }
    }
  }
  else{
  }
  puts('Скорость: '+v);
  puts('Координаты : '+round(rover_x)+' '+round(rover_y)+'');
  puts("Сделайте красивое фото для базы!");
}
S.paint();
S.drawImage(landscape,0,0,510,296);
S.drawImage(rover,rover_x,rover_y,rover_w,rover_h);
if(v>0) { restart(P); P=50; }
{{html
  <embed SRC="http://marley.spb.ru/music/doors.mid" type="audio/x-midi"  autostart="true" height="10" loop="1">
    <br>
    <div align=center><hr><b>Управление марсоходом</b></div>
    <table border=0 align=center>
    <tr>
    <td></td>
    <td align="center"><input type="button" value=" up  " onClick="flag=0;"></td>
    <td></td>
    </tr>  
    <tr>
    <td><input type="button" value="left " onClick="flag=2;"></td>
    <td><input type="button" value="foto " onClick="flag=4; P=1000;">
    <input type="button" value=" OFF" onClick="engine=0;"></td>
    <td><input type="button" value="right" onClick="flag=3;"></td>
    </tr>
    <tr>
    <td></td>
    <td align="center"><input type="button" value=" down" onClick="flag=1;"></td>
    <td></td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    html}}
