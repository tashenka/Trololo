if(tick==0){ P=1000;
  frame_x = 510;
  frame_y = 300;
  mars_center_x = 235;
  mars_center_y = 150;
  mars_radius = 135;
  OpenCanvas('S',frame_x,frame_y);
  S.clear();
  F="http://marley.spb.ru/mult/files/";
  start_picture=F+"Curiosity1.png";
  rover=F+"rover.png";
  landscape=F+"mars.PNG";

  debug = 0;

  photo1=F+"mars_1.jpg";
  photo2=F+"Curiosity.jpg";
  photo3=F+"Curiosity2.png";
  photo4=F+"MarsDesert.jpg";
  photo5=F+"Panorama.png";
  photos = [photo1,photo2,photo3,photo4,photo5];

  v=2;
  x=0;
  y=0;
  X=0;
  Y=0;
  
  rover_scale=100;
  rover_w=40;
  rover_h=30;

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
    new_y = y;
    new_x = x;
    switch(flag){
      case 0:{rover=F+'rover_u.png';
        new_y=y-v;rover_w=30;rover_h=40; break;
      }
      case 1:{rover=F+'rover_d.png';
        new_y=y+v;rover_w=30;rover_h=40; break;
      }
      case 2:{rover=F+'rover_r.png';
        new_x=x-v;rover_w=40;rover_h=30; break;
      }
      case 3:{rover=F+'rover.png';
        new_x=x+v;rover_w=40;rover_h=30; break;
      }
    }
    ny = 4*sign(new_x)*sqrt(abs(new_x))
    nx = 4*sign(new_y)*sqrt(abs(new_y))

    if(ny*ny+nx*nx < mars_radius*mars_radius){
      x = new_x;
      y = new_y;
    }
  }
  else{
    puts("Двигатель заглушен. Начинайте движение!");
  }

  X=4*sign(x)*sqrt(abs(x));
  Y=4*sign(y)*sqrt(abs(y));

  rover_scale = 100/(sqrt(x*x+y*y)/350);
  if(rover_scale>100){rover_scale=100;}

  rover_scaled_w = rover_w*(rover_scale/100);
  rover_scaled_h = rover_h*(rover_scale/100);

  rover_x=mars_center_x+X-rover_scaled_w/2;
  rover_y=mars_center_y+Y-rover_scaled_h/2;

  puts('Тик: ' + tick);
  puts('Скорость: '+v);
  puts('Координаты : '+round(rover_x)+' '+round(rover_y)+' ' + 'декарт: '+round(X)+' '+round(Y));
  puts("Сделайте красивое фото для базы!");
  P=500;
  S.drawImage(landscape,0,0,510,296);
  if(debug==1){
    S.drawImage("http://marley.spb.ru/images/dotg.gif", mars_center_x,mars_center_y, 5, 5);
  }
  S.drawImage(rover,rover_x,rover_y,rover_scaled_w,rover_scaled_h);
  S.paint();

}
restart(P); P=50;

{{html
  <embed SRC="http://marley.spb.ru/music/doors.mid" type="audio/x-midi"  autostart="true" height="10" loop="1">
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
    </td>
    </tr>
    </table>
    html}}
