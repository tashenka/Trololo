if(tick==0){ P=1000;
  frame_x = 510;
  frame_y = 300;
  OpenCanvas('S',frame_x,frame_y);
  S.clear();
  F="http://marley.spb.ru/mult/files/";
  start_picture=F+"Curiosity1.png";
  rover=F+"rover.png";
  landscape=F+"mars.PNG";

  photo1=F+"mars_1.jpg";
  photo2=F+"Curiosity.jpg";
  photo3=F+"Curiosity2.png";
  photo4=F+"MarsDesert.jpg";
  photo5=F+"Panorama.png";
  photos = [photo1,photo2,photo3,photo4,photo5];

  v=2;
  rover_x=frame_x/2;
  rover_y=frame_y/2;
  rover_w=0;
  rover_h=0;
  engine=0; //двигатель
  flag=0; //флаг стороны движения
  photo_flag=0;//флаг для фото
  puts("Сделайте красивое фото для базы!")
}
if(tick<100){
  puts("Происходит посадка марсохода.");
  puts("Выполнено: " + tick + "%");
  if(tick == 0){
    S.clear();  
    S.drawImage(start_picture,0,0,510,296);
    S.paint();
  }
}else if(photo_flag==1){
  engine=0;
  S.clear();
  P=1000;
  S.drawImage(photos[flag],0,0,510,296);
  S.paint();
  puts("У Вас получился обалденный снимок!");
}else{
  S.clear();
  if(engine==1)
  { 
    switch(flag){//if(((rover_x-255)^2-(rover_y-150)^2)≤280){
      case 0:{rover=F+'rover_u.png';
        if(rover_y>25){rover_y=rover_y-v; break;}else{break;}}
      case 1:{rover=F+'rover_d.png';
        if(rover_y<240){rover_y=rover_y+v; break;}else{break;}}
      case 2:{rover=F+'rover_r.png';
        if(rover_x>120){rover_x=rover_x-v; break;}else{break;}}
      case 3:{rover=F+'rover.png';
        if(rover_x<310){rover_x=rover_x+v; break;}else{break;}}
    }
  }
  else{
    puts("Двигатель заглушен. Начинайте движение!");
  }


  puts('Тик: ' + tick);
  puts('Скорость: '+v);
  puts('Координаты : '+round(rover_x)+' '+round(rover_y)+'');
  puts("Сделайте красивое фото для базы!");

  S.drawImage(landscape,0,0,510,296);
  S.drawImage(rover,rover_x,rover_y,rover_w,rover_h);
  S.paint();

}
restart(P); P=50;

{{html
  /* <embed SRC="http://marley.spb.ru/music/doors.mid" type="audio/x-midi"  autostart="true" height="10" loop="1">*/
  <br>
    <div align=center><hr><b>Управление марсоходом</b></div>
    <table border=0 align=center>
    <tr>
    <td></td>
    <td align="center"><input type="button" value="&uarr;" onClick="engine=1;flag=0;photo_flag=0;"></td>
    <td></td>
    </tr>  
    <tr>
    <td><input type="button" value="&larr;" onClick="engine=1;flag=2;photo_flag=0;"></td>
    <td><input type="button" value="foto " onClick="photo_flag=1;">
    <input type="button" value=" OFF" onClick="engine=0;photo_flag=0;"></td>
    <td><input type="button" value="&rarr;" onClick="engine=1;flag=3;photo_flag=0;"></td>
    </tr>
    <tr>
    <td></td>
    <td align="center"><input type="button" value=" &darr;" onClick="engine=1;flag=1;photo_flag=0;"></td>
    <td></td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    html}}
