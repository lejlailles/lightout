$(function () {
  //A szülőelem és a sablon elem meghatározása

  const szuloElem = $("article");
  const sablonElem = $(".lampa");
  const lampaTomb = [];
  const meret = 9;

  for (let index = 0; index < meret; index++) {
    //A sablonelem klónozása, szülőelem csatolása

    const ujElem = sablonElem.clone().appendTo(szuloElem);

    // példányosítás
    const lampa = new Lampa(ujElem, index);

//az objektumokat belerakjuk egy tömbbe
    lampaTomb.push(lampa);
  }
  sablonElem.remove();
  console.log(lampaTomb);

  //feliratkozás az eseményre 

  $(window).on("lampakapcsolas",(esemeny) => {
      console.log(esemeny.detail);
      let elemID=esemeny.detail;
      //szomszédos elem
      let meret=3;
      if(elemID>meret-1){
          lampaTomb[elemID-meret].setAllapot();
     
      }
      if(elemID<meret*meret-meret){
        lampaTomb[elemID+meret].setAllapot();
   
    }
    if(elemID%meret!==0){
        lampakTomb[elemID-1].setAllapot();
   
    }

    if(elemID%meret!==meret-1){
        lampakTomb[elemID+1].setAllapot();
   
    }


  });
});
