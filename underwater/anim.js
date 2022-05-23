function anim(){
        // réglages
        tl.pause();
        //tl.to('svg', {duration:audio.duration});
        tl.set("*", { transformOrigin: "center center" },0);

        tl.set('#trans, #dure, #fluide, #vagues, #pleins, #moving, #balade-poisson, #sky-dream, #dream-fish, #etoile-g-rotate, #fleur1, #fleur2, #fleur3, #fleur4, #fleur5, #fleur6, #fleur7, #fleur8, #fleur9, #fleur10, #fleur11, #fleur12, #fleur13, #fleur15, #fleur16, #fleur17, #fleur18, #credit-1, #credit-2, #credit-3, #credit-4, #sky-dream-2, #new-bg-end', {opacity:0},0);

        //partie ondes

        tl.to('#groupe-onde > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde > *', {opacity:1, duration:1, stagger:0.3}, 1);
        tl.to('#groupe-onde > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 1.2);
        tl.to('#basse', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse', {opacity:1, scale:5, duration:2},0.5);
        tl.to('#basse', {opacity:0, scale:4, duration:1}, 2);

        tl.to('#groupe-onde-2 > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde-2 > *', {opacity:1, duration:1, stagger:0.3}, 3);
        tl.to('#groupe-onde-2 > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 3.2);
        tl.to('#basse-2', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse-2', {opacity:1, scale:3, duration:2}, 2);
        tl.to('#basse-2', {opacity:0, scale:2, duration:1}, 3);

        tl.to('#groupe-onde-3 > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde-3 > *', {opacity:1, duration:1, stagger:0.3}, 5);
        tl.to('#groupe-onde-3 > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 5.2);
        tl.to('#basse-3', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse-3', {opacity:1, scale:5, duration:2}, 5);
        tl.to('#basse-3', {opacity:0, scale:4, duration:1}, 7);

        tl.to('#groupe-onde-4 > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde-4 > *', {opacity:1, duration:1, stagger:0.3}, 8);
        tl.to('#groupe-onde-4 > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 8.2);
        tl.to('#basse-4', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse-4', {opacity:1, scale:3, duration:2}, 7);
        tl.to('#basse-4', {opacity:0, scale:2, duration:1}, 9);

        tl.to('#groupe-onde-5 > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde-5 > *', {opacity:1, duration:1, stagger:0.3}, 10);
        tl.to('#groupe-onde-5 > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 10.2);
        tl.to('#basse-5', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse-5', {opacity:1, scale:6, duration:2}, 9);
        tl.to('#basse-5', {opacity:0, scale:5, duration:1}, 11);

        tl.to('#groupe-onde-6 > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde-6 > *', {opacity:1, duration:1, stagger:0.3}, 12);
        tl.to('#groupe-onde-6 > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 12.2);
        tl.to('#basse-6', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse-6', {opacity:1, scale:3, duration:2}, 11);
        tl.to('#basse-6', {opacity:0, scale:2, duration:1}, 13);

        tl.to('#groupe-onde-7 > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde-7 > *', {opacity:1, duration:1, stagger:0.3}, 15);
        tl.to('#groupe-onde-7 > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 15.2);
        tl.to('#basse-7', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse-7', {opacity:1, scale:5, duration:2}, 14);
        tl.to('#basse-7', {opacity:0, scale:4, duration:1}, 16);

        tl.to('#groupe-onde-8 > *', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#groupe-onde-8 > *', {opacity:1, duration:1, stagger:0.3}, 17);
        tl.to('#groupe-onde-8 > *', {scale:7, opacity:0, duration:1, stagger:0.3}, 17.2);
        tl.to('#basse-8', {opacity:0, scale:0, duration:0}, 0);
        tl.to('#basse-8', {opacity:1, scale:3, duration:2}, 16);
        tl.to('#basse-8', {opacity:0, scale:2, duration:1}, 18);

        //partie vagues

        tl.set('#vagues', {opacity:1},19);

        gsap.registerPlugin("drawSVG","morphSVG");

        tl.fromTo('#vagues #big-1',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:3,ease:"none"},19);
        tl.fromTo('#vagues #big-3',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:3,ease:"none"},21.2);
        tl.fromTo('#vagues #big-2',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:3,ease:"none"},19);
        tl.fromTo('#vagues #big-4',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:3,ease:"none"},21.2);

        tl.fromTo('#vagues #fine-12',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},19);
        tl.fromTo('#vagues #fine-13',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},19.5);
        tl.fromTo('#vagues #fine-14',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},20);
        tl.fromTo('#vagues #fine-15',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},19.5);
        tl.fromTo('#vagues #fine-5',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},19.5);
        tl.fromTo('#vagues #fine-6',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},19);
        tl.fromTo('#vagues #fine-7',{drawSVG:'0% 0%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},20);

        tl.fromTo('#vagues #fine-1',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},21.5);
        tl.fromTo('#vagues #fine-2',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},22);
        tl.fromTo('#vagues #fine-3',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},21.2);
        tl.fromTo('#vagues #fine-4',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},21.5);
        tl.fromTo('#vagues #fine-8',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},21.5);
        tl.fromTo('#vagues #fine-9',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},21.2);
        tl.fromTo('#vagues #fine-10',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},22);
        tl.fromTo('#vagues #fine-11',{drawSVG:'100% 100%'},{drawSVG:'0% 100%',duration:1.2,ease:"none"},21.2);

        tl.set('#pleins', {opacity:1},24);

        tl.to('#plein-1', {opacity:0,}, 24);
        tl.to('#plein-1', {opacity:1,}, 24.5);
        tl.to('#plein-1', {opacity:0,}, 27);

        tl.to('#plein-2', {opacity:0,}, 24);
        tl.to('#plein-2', {opacity:1,}, 25.5);
        tl.to('#plein-2', {opacity:0,}, 27);

        tl.to('#plein-3', {opacity:0,}, 24);
        tl.to('#plein-3', {opacity:1,}, 24.5);
        tl.to('#plein-3', {opacity:0,}, 27);

        tl.to('#plein-4', {opacity:0,}, 24);
        tl.to('#plein-4', {opacity:1,}, 25.5);
        tl.to('#plein-4', {opacity:0,}, 27);

        tl.to('#plein-5', {opacity:0,}, 24);
        tl.to('#plein-5', {opacity:1,}, 27);
        tl.to('#plein-5', {opacity:0,}, 29);

        tl.to('#plein-6', {opacity:0,}, 24);
        tl.to('#plein-6', {opacity:1,}, 28);
        tl.to('#plein-6', {opacity:0,}, 29);

        tl.to('#plein-7', {opacity:0,}, 24);
        tl.to('#plein-7', {opacity:1,}, 27);
        tl.to('#plein-7', {opacity:0,}, 29);

        tl.to('#plein-8', {opacity:0,}, 24);
        tl.to('#plein-8', {opacity:1,}, 28);
        tl.to('#plein-8', {opacity:0,}, 29);

        //partie changement de décor

        tl.set('#vagues', {opacity:0},29);
        tl.set('#moving', {opacity:1},29);

        tl.to('#move-1', {rotate:1, },29.2);
        tl.to('#move-1', {rotate:-1, },30.2);
        tl.to('#move-1', {rotate:1, },31.2);
        tl.to('#move-1', {rotate:-1, },32.2);

        tl.to('#move-1', {rotate:1, },33.2);
        tl.to('#move-1', {rotate:-1, },34.2);
        tl.to('#move-1', {rotate:1, },35.2);
        tl.to('#move-1', {rotate:-1, },36.2);

        tl.to('#move-2', {rotate:-1, },29.2);
        tl.to('#move-2', {rotate:1, },30.2);
        tl.to('#move-2', {rotate:-1, },31.2);
        tl.to('#move-2', {rotate:1, },32.2);

        tl.to('#move-2', {rotate:-1, },33.2);
        tl.to('#move-2', {rotate:1, },34.2);
        tl.to('#move-2', {rotate:-1, },35.2);
        tl.to('#move-2', {rotate:1, },36.2);

        tl.to('#move-3', {rotate:1, },29.2);
        tl.to('#move-3', {rotate:-1, },30.2);
        tl.to('#move-3', {rotate:1, },31.2);
        tl.to('#move-3', {rotate:-1, },32.2);

        tl.to('#move-3', {rotate:1, },33.2);
        tl.to('#move-3', {rotate:-1, },34.2);
        tl.to('#move-3', {rotate:1, },35.2);
        tl.to('#move-3', {rotate:-1, },36.2);

        tl.to('#move-4', {rotate:-1, },29.2);
        tl.to('#move-4', {rotate:1, },30.2);
        tl.to('#move-4', {rotate:-1, },31.2);
        tl.to('#move-4', {rotate:1, },32.2);

        tl.to('#move-4', {rotate:-1, },33.2);
        tl.to('#move-4', {rotate:1, },34.2);
        tl.to('#move-4', {rotate:-1, },35.2);
        tl.to('#move-4', {rotate:1, },36.2);

        tl.to('#move-1', {y:1200, duration: 9}, 38);
        tl.to('#move-2', {y:1200, duration: 9}, 38);
        tl.to('#move-3', {y:1200, duration: 9}, 38);
        tl.to('#move-4', {y:1200, duration: 9}, 38);


        //arriver des poisson

       //  tl.set('#balade-poisson', {opacity:0},36.2);

       //  tl.to('#move-1', {rotate:1, },36.2);
       //  tl.to('#move-1', {rotate:-1, },37.2);
       //  tl.to('#move-1', {rotate:1, },38.2);
       //  tl.to('#move-1', {rotate:-1, },39.2);
       //  tl.to('#move-1', {rotate:-1, },40.2);

       //  tl.to('#move-2', {rotate:-1, },36.2);
       //  tl.to('#move-2', {rotate:1, },37.2);
       //  tl.to('#move-2', {rotate:-1, },38.2);
        
       //  tl.to('#move-3', {rotate:1, },39.2);
       //  tl.to('#move-3', {rotate:-1, },40.2);

       // tl.set("#poisson-8, #poisson-1, #poisson-2, #poisson-3, #poisson-9>*",{scaleY:-1},36.2);
       // tl.set("#poisson-1, #poisson-2, #poisson-3, #poisson-4, #poisson-9>*",{scaleX:-1},36.2);
       // tl.set("#chemin-9, #chemin-8, #chemin-7, #chemin-6, #chemin-5, #chemin-4, #chemin-3, #chemin-2, #chemin-1 ",{opacity:0},36.2);
       
       // //tl.fromTo('#poisson-8', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-7', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-6', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-5', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-4', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-3', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-2', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-1', {opacity:0,}, {opacity:1, duration:2,},36);
       // tl.fromTo('#poisson-9>*', {opacity:0,}, {opacity:1, duration:2,},36)
       // //tl.to("#poisson-8",{
       // //       motionPath:{
       // //               path: "#chemin-9",
       // //               align: "#chemin-9",
       // //               autoRotate: true,
       // //               alignOrigin: [0.5, 0.5],
       // //        },
       // //        duration:5
       // //}
       // //,36.2);
       // tl.to("#poisson-7",{
       //        motionPath:{
       //                path: "#chemin-2",
       //                align: "#chemin-2",
       //                autoRotate: true,
       //                alignOrigin: [0.5, 0.5]
       //         },
       //         duration:5
       // }
       // ,37.2);
       // tl.to("#poisson-6",{
       //        motionPath:{
       //                path: "#chemin-1",
       //                align: "#chemin-1",
       //                autoRotate: true,
       //                alignOrigin: [0.5, 0.5]
       //         },
       //         duration:5
       // }
       // ,36.2);
       // tl.to("#poisson-5",{
       //        motionPath:{
       //                path: "#chemin-4",
       //                align: "#chemin-4",
       //                autoRotate: true,
       //                alignOrigin: [0.5, 0.5]
       //         },
       //         duration:5
       // }
       // ,37.2);
       // tl.to('#move-4', {rotate:-1, },42.2);
       // tl.to('#move-4', {rotate:1, },43.2);
       // tl.to('#move-4', {rotate:-1, },44.2);
       // tl.to('#move-4', {rotate:1, },45.2)
       // tl.to("#poisson-1",{
       //        motionPath:{
       //                path: "#chemin-6",
       //                align: "#chemin-6",
       //                autoRotate: true,
       //                alignOrigin: [0.5, 0.5]
       //         },
       //         duration:5
       // }
       // ,43.2);

       // tl.to("#poisson-2",{
       //        motionPath:{
       //                path: "#chemin-7",
       //                align: "#chemin-7",
       //                autoRotate: true,
       //                alignOrigin: [0.5, 0.5]
       //         },
       //         duration:5
       // }
       // ,44.2)
       // tl.to("#poisson-3",{
       //        motionPath:{
       //                path: "#chemin-8",
       //                align: "#chemin-8",
       //                autoRotate: true,
       //                alignOrigin: [0.5, 0.5]
       //         },
       //         duration:5
       // }
       // ,43.2)
       // tl.to("#poisson-4",{
       //        motionPath:{
       //                path: "#chemin-3",
       //                align: "#chemin-3",
       //                autoRotate: true,
       //                alignOrigin: [0.5, 0.5],

       //         },
       //         duration:5
       // }
       // ,45.2);


       //  tl.to("#poisson-9>*",{
       //         motionPath:{
       //                 path: "#chemin-9",
       //                 align: "#chemin-9",
       //                 autoRotate: true,
       //                 alignOrigin: [0.5, 0.5],
       //          },
       //          duration:5
       //  }
       //  ,47.2);
       //  tl.fromTo("#poisson-9>*", {y:1, x:1}, {y:14600, x:14700, scale: -250, duration: 15,}, 52)
       //  tl.to("#poisson-9>*", {opacity:0, duration:3,}, 67);
 


          //partie etoile

         tl.set('#sky-dream', {opacity:1},42);
         tl.set('#sky-dream-2', {opacity:1},42);


         const date = new Date();

         const mois = date.getMonth();
console.log("mois - 1 = "+mois);

const jour = date.getDate();
console.log("le "+jour);
let etoile = "#sky-dream>*, #Star-1, #Star-2, #Star-3, #Star-4, #Star-5, #Star-6, #Star-7, #Star-8, #Star-9, #Star-10, #Star-11";

if(jour === 2 && mois === 5){
    console.log("joyeux anniversaire");
    let etoile = "#sky-dream-2>*, #star-1, #star-2, #star-3, #star-4, #star-5, #star-6, #star-7, #star-8, #star-9, #star-10, #star-11";
  }

         tl.fromTo('#sky-dream', {opacity:0}, {opacity:1, duration: 8}, 42);

         tl.fromTo("#Star-1",{opacity:0}, {opacity:1, duration: 3}, 49);
         tl.fromTo("#Star-2",{opacity:0}, {opacity:1,duration: 3}, 49);
         tl.fromTo("#Star-3",{opacity:0}, {opacity:1,duration: 2}, 49);
         tl.fromTo("#Star-4",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#Star-5",{opacity:0}, {opacity:1, duration: 3}, 49);
         tl.fromTo("#Star-6",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#Star-7",{opacity:0}, {opacity:1,duration: 3}, 49);
         tl.fromTo("#Star-8",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#Star-9",{opacity:0}, {opacity:1,duration: 3}, 49);
         tl.fromTo("#Star-10",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#Star-11",{opacity:0}, {opacity:1,duration: 2}, 49);

         tl.to("#Star-1",{rotate:-1440, duration: 10}, 51);
         tl.to("#Star-2",{rotate:1440, duration: 10}, 51);
         tl.to("#Star-3",{rotate:1440, duration: 10}, 51);
         tl.to("#Star-4",{rotate:-1440, duration: 10}, 51);
         tl.to("#Star-5",{rotate:-1440, duration: 10}, 51);
         tl.to("#Star-6",{rotate:-1440, duration: 10}, 51);
         tl.to("#Star-7",{rotate:1440, duration: 10}, 51);
         tl.to("#Star-8",{rotate:-1440, duration: 10}, 51);
         tl.to("#Star-9",{rotate:1440, duration: 10}, 51);
         tl.to("#Star-10",{ rotate:-1440, duration: 10}, 51);
         tl.to("#Star-11",{ rotate:1440, duration: 10}, 51);

         tl.fromTo("#Star-1",{scale:1, x:1, y:1}, {scale: 30, y:4000, duration: 8}, 61);
         tl.fromTo("#Star-2",{scale:1, x:1, y:1}, {scale: 30, y:-4000, duration: 10}, 61);
         tl.fromTo("#Star-3",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 6}, 61);
         tl.fromTo("#Star-4",{scale:1, x:1, y:1}, {scale: 30, x:4000, duration: 8}, 61);
         tl.fromTo("#Star-5",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 10}, 61);
         tl.fromTo("#Star-6",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 10}, 61);
         tl.fromTo("#Star-7",{scale:1, x:1, y:1}, {scale: 30, y:4000, duration: 8}, 61);
         tl.fromTo("#Star-8",{scale:1, x:1, y:1}, {scale: 30, x:4000, duration: 8}, 61);
         tl.fromTo("#Star-9",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 6}, 61);
         tl.fromTo("#Star-10",{scale:1, x:1, y:1}, {scale: 30, y:4000, duration: 6}, 61);
         tl.fromTo("#Star-11",{scale:1, x:1, y:1}, {scale: 30, x:4000, duration: 8}, 61);


         tl.set('#sky-dream', {opacity:0}, 71);

         tl.fromTo('#sky-dream-2', {opacity:0}, {opacity:1, duration: 8}, 42);

         tl.fromTo("#star-1",{opacity:0}, {opacity:1, duration: 3}, 49);
         tl.fromTo("#star-2",{opacity:0}, {opacity:1,duration: 3}, 49);
         tl.fromTo("#star-3",{opacity:0}, {opacity:1,duration: 2}, 49);
         tl.fromTo("#star-4",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#star-5",{opacity:0}, {opacity:1, duration: 3}, 49);
         tl.fromTo("#star-6",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#star-7",{opacity:0}, {opacity:1,duration: 3}, 49);
         tl.fromTo("#star-8",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#star-9",{opacity:0}, {opacity:1,duration: 3}, 49);
         tl.fromTo("#star-10",{opacity:0}, {opacity:1, duration: 2}, 49);
         tl.fromTo("#star-11",{opacity:0}, {opacity:1,duration: 2}, 49);

         tl.to("#star-1",{rotate:-1440, duration: 10}, 51);
         tl.to("#star-2",{rotate:1440, duration: 10}, 51);
         tl.to("#star-3",{rotate:1440, duration: 10}, 51);
         tl.to("#star-4",{rotate:-1440, duration: 10}, 51);
         tl.to("#star-5",{rotate:-1440, duration: 10}, 51);
         tl.to("#star-6",{rotate:-1440, duration: 10}, 51);
         tl.to("#star-7",{rotate:1440, duration: 10}, 51);
         tl.to("#star-8",{rotate:-1440, duration: 10}, 51);
         tl.to("#star-9",{rotate:1440, duration: 10}, 51);
         tl.to("#star-10",{ rotate:-1440, duration: 10}, 51);
         tl.to("#star-11",{ rotate:1440, duration: 10}, 51);

         tl.fromTo("#star-1",{scale:1, x:1, y:1}, {scale: 30, y:4000, duration: 8}, 61);
         tl.fromTo("#star-2",{scale:1, x:1, y:1}, {scale: 30, y:-4000, duration: 10}, 61);
         tl.fromTo("#star-3",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 6}, 61);
         tl.fromTo("#star-4",{scale:1, x:1, y:1}, {scale: 30, x:4000, duration: 8}, 61);
         tl.fromTo("#star-5",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 10}, 61);
         tl.fromTo("#star-6",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 10}, 61);
         tl.fromTo("#star-7",{scale:1, x:1, y:1}, {scale: 30, y:4000, duration: 8}, 61);
         tl.fromTo("#star-8",{scale:1, x:1, y:1}, {scale: 30, x:4000, duration: 8}, 61);
         tl.fromTo("#star-9",{scale:1, x:1, y:1}, {scale: 30, x:-4000, duration: 6}, 61);
         tl.fromTo("#star-10",{scale:1, x:1, y:1}, {scale: 30, y:4000, duration: 6}, 61);
         tl.fromTo("#star-11",{scale:1, x:1, y:1}, {scale: 30, x:4000, duration: 8}, 61);


         tl.set('#sky-dream-2', {opacity:0}, 71);


         tl.set("#etoile-g-rotate", {opacity:1}, 71);

         tl.fromTo("#etoile-rotate", {scale:-100}, {scale:1, duration: 10}, 71.5);
         tl.to("#etoile-rotate", {rotate:14400, duration: 20}, 77.5);

         tl.fromTo('#fillante1', {opacity:0}, {opacity:1, x: -1500, y: -100, duration: 5}, 65);
         tl.fromTo('#fillante2', {opacity:0}, {opacity:1, x: -1500, y: 100, duration: 5}, 62);
         tl.fromTo('#fillante3', {opacity:0}, {opacity:1, x: -1500, y: -100, duration: 5}, 70);
         tl.fromTo('#fillante4', {opacity:0}, {opacity:1, x: -1500, y: -100, duration: 5}, 62);
         tl.fromTo('#fillante5', {opacity:0}, {opacity:1, y: -100, duration: 5 }, 75);
         tl.fromTo('#fillante6', {opacity:0}, {opacity:1, x: 1500, duration: 5}, 65);
         tl.fromTo('#fillante7', {opacity:0}, {opacity:1, x: 1500, y: 100, duration: 5}, 79);
         tl.fromTo('#fillante8', {opacity:0}, {opacity:1, x: -1500, y: 300, duration: 5}, 79);
         tl.fromTo('#fillante9', {opacity:0}, {opacity:1, y: -100, duration: 5}, 75);
         tl.fromTo('#fillante10', {opacity:0}, {opacity:1, x: 500, y: -100, duration: 5}, 70);



         tl.set("#etoile-g-rotate", {opacity:0}, 90);








         tl.set("#fleur1", {opacity:1}, 80);

         tl.fromTo('#fleur1', {opacity:0}, {opacity:1, duration: 10}, 80);

         tl.to('#details1>*',{
              rotation:(i,e) => i*(360/18), 
              transformOrigin:'100% 50%',
             // fill: (i,e) => 'hsl('+i*(60/18)+',50%,50%)',
              duration:1,
              ease:Linear.easeNone}, 91);

              tl.to('#details1',{
                  rotation:43200, 
                  transformOrigin:'90% 55%',
                  duration:20,
                  ease:Linear.easeNone}, 91);

                  tl.set("#fleur2", {opacity:1}, 83);

                  tl.fromTo('#fleur2', {opacity:0}, {opacity:1, duration: 10}, 83);

                  tl.to('#details2>*',{
                       rotation:(i,e) => i*(360/18), 
                       transformOrigin:'100% 50%',
                       //fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                       duration:1,
                       ease:Linear.easeNone}, 91);
         
                       tl.to('#details2',{
                           rotation:43200, 
                           transformOrigin:'90% 55%',
                           duration:20,
                           ease:Linear.easeNone}, 94);



                           tl.set("#fleur3", {opacity:1}, 80);

                           tl.fromTo('#fleur3', {opacity:0}, {opacity:1, duration: 10}, 80);
         
                           tl.to('#details3>*',{
                                rotation:(i,e) => i*(360/18), 
                                transformOrigin:'100% 50%',
                                //fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                duration:1,
                                ease:Linear.easeNone}, 91);
                  
                                tl.to('#details3',{
                                    rotation:43200, 
                                    transformOrigin:'90% 55%',
                                    duration:20,
                                    ease:Linear.easeNone}, 91);



                                    tl.set("#fleur4", {opacity:1}, 83);

                                    tl.fromTo('#fleur4', {opacity:0}, {opacity:1, duration: 10}, 83);
                  
                                    tl.to('#details4>*',{
                                         rotation:(i,e) => i*(360/18), 
                                         transformOrigin:'100% 50%',
                                       //  fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                         duration:1,
                                         ease:Linear.easeNone}, 91);
                           
                                         tl.to('#details4',{
                                             rotation:43200, 
                                             transformOrigin:'90% 55%',
                                             duration:20,
                                             ease:Linear.easeNone}, 94);



                                             tl.set("#fleur6", {opacity:1}, 80);

                                             tl.fromTo('#fleur6', {opacity:0}, {opacity:1, duration: 10}, 80);
                           
                                             tl.to('#details6>*',{
                                                  rotation:(i,e) => i*(360/18), 
                                                  transformOrigin:'100% 50%',
                                                 // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                  duration:1,
                                                  ease:Linear.easeNone}, 91);
                                    
                                                  tl.to('#details6',{
                                                      rotation:43200, 
                                                      transformOrigin:'90% 55%',
                                                      duration:20,
                                                      ease:Linear.easeNone}, 111);






                                                      tl.set("#fleur7", {opacity:1}, 80);

                                                      tl.fromTo('#fleur7', {opacity:0}, {opacity:1, duration: 10}, 80);
                                    
                                                      tl.to('#details7>*',{
                                                           rotation:(i,e) => i*(360/18), 
                                                           transformOrigin:'100% 50%',
                                                          // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                           duration:1,
                                                           ease:Linear.easeNone}, 91);
                                             
                                                           tl.to('#details7',{
                                                               rotation:43200, 
                                                               transformOrigin:'90% 55%',
                                                               duration:20,
                                                               ease:Linear.easeNone}, 91);




                                                               tl.set("#fleur8", {opacity:1}, 80);

                                                               tl.fromTo('#fleur8', {opacity:0}, {opacity:1, duration: 10}, 80);
                                             
                                                               tl.to('#details8>*',{
                                                                    rotation:(i,e) => i*(360/18), 
                                                                    transformOrigin:'100% 50%',
                                                                   // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                    duration:1,
                                                                    ease:Linear.easeNone}, 91);
                                                      
                                                                    tl.to('#details8',{
                                                                        rotation:43200, 
                                                                        transformOrigin:'90% 55%',
                                                                        duration:20,
                                                                        ease:Linear.easeNone}, 91);




                                                                        tl.set("#fleur8", {opacity:1}, 80);

                                                                        tl.fromTo('#fleur8', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                      
                                                                        tl.to('#details8>*',{
                                                                             rotation:(i,e) => i*(360/18), 
                                                                             transformOrigin:'100% 50%',
                                                                            // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                             duration:1,
                                                                             ease:Linear.easeNone}, 91);
                                                               
                                                                             tl.to('#details8',{
                                                                                 rotation:43200, 
                                                                                 transformOrigin:'90% 55%',
                                                                                 duration:20,
                                                                                 ease:Linear.easeNone}, 91);




                                                                                 tl.set("#fleur9", {opacity:1}, 80);

                                                                                 tl.fromTo('#fleur9', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                               
                                                                                 tl.to('#details9>*',{
                                                                                      rotation:(i,e) => i*(360/18), 
                                                                                      transformOrigin:'100% 50%',
                                                                                     // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                      duration:1,
                                                                                      ease:Linear.easeNone}, 91);
                                                                        
                                                                                      tl.to('#details9',{
                                                                                          rotation:43200, 
                                                                                          transformOrigin:'90% 55%',
                                                                                          duration:20,
                                                                                          ease:Linear.easeNone}, 100);




                                                                                          tl.set("#fleur10", {opacity:1}, 80);

                                                                                          tl.fromTo('#fleur10', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                        
                                                                                          tl.to('#details10>*',{
                                                                                               rotation:(i,e) => i*(360/18), 
                                                                                               transformOrigin:'100% 50%',
                                                                                              // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                               duration:1,
                                                                                               ease:Linear.easeNone}, 91);
                                                                                 
                                                                                               tl.to('#details10',{
                                                                                                   rotation:43200, 
                                                                                                   transformOrigin:'90% 55%',
                                                                                                   duration:20,
                                                                                                   ease:Linear.easeNone}, 91);






                                                                                                   tl.set("#fleur11", {opacity:1}, 80);

                                                                                                   tl.fromTo('#fleur11', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                 
                                                                                                   tl.to('#details11>*',{
                                                                                                        rotation:(i,e) => i*(360/18), 
                                                                                                        transformOrigin:'100% 50%',
                                                                                                       // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                        duration:1,
                                                                                                        ease:Linear.easeNone}, 91);
                                                                                          
                                                                                                        tl.to('#details11',{
                                                                                                            rotation:43200, 
                                                                                                            transformOrigin:'90% 55%',
                                                                                                            duration:20,
                                                                                                            ease:Linear.easeNone}, 91);






                                                                                                            tl.set("#fleur12", {opacity:1}, 80);

                                                                                                            tl.fromTo('#fleur12', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                          
                                                                                                            tl.to('#details12>*',{
                                                                                                                 rotation:(i,e) => i*(360/18), 
                                                                                                                 transformOrigin:'100% 50%',
                                                                                                                // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                                 duration:1,
                                                                                                                 ease:Linear.easeNone}, 91);
                                                                                                   
                                                                                                                 tl.to('#details12',{
                                                                                                                     rotation:43200, 
                                                                                                                     transformOrigin:'90% 55%',
                                                                                                                     duration:20,
                                                                                                                     ease:Linear.easeNone}, 111);







                                                                                                                     tl.set("#fleur13", {opacity:1}, 80);

                                                                                                                     tl.fromTo('#fleur13', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                                   
                                                                                                                     tl.to('#details13>*',{
                                                                                                                          rotation:(i,e) => i*(360/18), 
                                                                                                                          transformOrigin:'100% 50%',
                                                                                                                         // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                                          duration:1,
                                                                                                                          ease:Linear.easeNone}, 91);
                                                                                                            
                                                                                                                          tl.to('#details13',{
                                                                                                                              rotation:43200, 
                                                                                                                              transformOrigin:'90% 55%',
                                                                                                                              duration:20,
                                                                                                                              ease:Linear.easeNone}, 91);






                                                                                                                              tl.set("#fleur14", {opacity:1}, 80);

                                                                                                                              tl.fromTo('#fleur14', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                                            
                                                                                                                              tl.to('#details14>*',{
                                                                                                                                   rotation:(i,e) => i*(360/18), 
                                                                                                                                   transformOrigin:'100% 50%',
                                                                                                                                  // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                                                   duration:1,
                                                                                                                                   ease:Linear.easeNone}, 91);
                                                                                                                     
                                                                                                                                   tl.to('#details14',{
                                                                                                                                       rotation:43200, 
                                                                                                                                       transformOrigin:'90% 55%',
                                                                                                                                       duration:20,
                                                                                                                                       ease:Linear.easeNone}, 91);








                                                                                                                                       tl.set("#fleur15", {opacity:1}, 80);

                                                                                                                                       tl.fromTo('#fleur15', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                                                     
                                                                                                                                       tl.to('#details15>*',{
                                                                                                                                            rotation:(i,e) => i*(360/18), 
                                                                                                                                            transformOrigin:'100% 50%',
                                                                                                                                           // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                                                            duration:1,
                                                                                                                                            ease:Linear.easeNone}, 91);
                                                                                                                              
                                                                                                                                            tl.to('#details15',{
                                                                                                                                                rotation:43200, 
                                                                                                                                                transformOrigin:'90% 55%',
                                                                                                                                                duration:20,
                                                                                                                                                ease:Linear.easeNone}, 100);







                                                                                                                                                tl.set("#fleur16", {opacity:1}, 80);

                                                                                                                                                tl.fromTo('#fleur16', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                                                              
                                                                                                                                                tl.to('#details16>*',{
                                                                                                                                                     rotation:(i,e) => i*(360/18), 
                                                                                                                                                     transformOrigin:'100% 50%',
                                                                                                                                                    // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                                                                     duration:1,
                                                                                                                                                     ease:Linear.easeNone}, 91);
                                                                                                                                       
                                                                                                                                                     tl.to('#details16',{
                                                                                                                                                         rotation:43200, 
                                                                                                                                                         transformOrigin:'90% 55%',
                                                                                                                                                         duration:20,
                                                                                                                                                         ease:Linear.easeNone}, 111);






                                                                                                                                                         tl.set("#fleur17", {opacity:1}, 80);

                                                                                                                                                         tl.fromTo('#fleur17', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                                                                       
                                                                                                                                                         tl.to('#details17>*',{
                                                                                                                                                              rotation:(i,e) => i*(360/18), 
                                                                                                                                                              transformOrigin:'100% 50%',
                                                                                                                                                             // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                                                                              duration:1,
                                                                                                                                                              ease:Linear.easeNone}, 91);
                                                                                                                                                
                                                                                                                                                              tl.to('#details17',{
                                                                                                                                                                  rotation:43200, 
                                                                                                                                                                  transformOrigin:'90% 55%',
                                                                                                                                                                  duration:20,
                                                                                                                                                                  ease:Linear.easeNone}, 91);







                                                                                                                                                                  tl.set("#fleur18", {opacity:1}, 80);

                                                                                                                                                                  tl.fromTo('#fleur18', {opacity:0}, {opacity:1, duration: 10}, 80);
                                                                                                                                                
                                                                                                                                                                  tl.to('#details18>*',{
                                                                                                                                                                       rotation:(i,e) => i*(360/18), 
                                                                                                                                                                       transformOrigin:'100% 50%',
                                                                                                                                                                      // fill: (i,e) => 'hsl('+i*(60/18)+',100%,50%)',
                                                                                                                                                                       duration:1,
                                                                                                                                                                       ease:Linear.easeNone}, 91);
                                                                                                                                                         
                                                                                                                                                                       tl.to('#details18',{
                                                                                                                                                                           rotation:43200, 
                                                                                                                                                                           transformOrigin:'80% 55%',
                                                                                                                                                                           duration:20,
                                                                                                                                                                           ease:Linear.easeNone}, 111);
       
       
       tl.to('#fleur1', {opacity:0}, 125);
       tl.to('#fleur2', {opacity:0}, 125);
       tl.to('#fleur3', {opacity:0}, 125);
       tl.to('#fleur4', {opacity:0}, 125);
       tl.to('#fleur5', {opacity:0}, 125);
       tl.to('#fleur6', {opacity:0}, 125);
       tl.to('#fleur7', {opacity:0}, 125);
       tl.to('#fleur8', {opacity:0}, 125);
       tl.to('#fleur9', {opacity:0}, 125);
       tl.to('#fleur10', {opacity:0}, 125);
       tl.to('#fleur11', {opacity:0}, 125);
       tl.to('#fleur12', {opacity:0}, 125);
       tl.to('#fleur13', {opacity:0}, 125);
       tl.to('#fleur14', {opacity:0}, 125);
       tl.to('#fleur15', {opacity:0}, 125);
       tl.to('#fleur16', {opacity:0}, 125);
       tl.to('#fleur17', {opacity:0}, 125);
       tl.to('#fleur18', {opacity:0}, 125);




       tl.set('#new-bg-end', {opacity:1}, 80);
       
        tl.set('#credit-1', {opacity:1},125 );

        tl.fromTo('#credit-1', {opacity:1}, {opacity:0, duration: 5}, 127);

        tl.set('#credit-2', {opacity:1},129 );

        tl.fromTo('#credit-2', {opacity:1}, {opacity:0, duration: 5}, 131);

        tl.set('#credit-3, #credit-4', {opacity:1},134 );

        tl.fromTo('#credit-3', {opacity:1}, {opacity:0, duration: 5}, 136);
        tl.fromTo('#credit-4', {opacity:1}, {opacity:0, duration: 5}, 136);





        //finiiiiiiiiiiiiiiiiii!!!!!!!



 



        
        




         
         











     

        




      


}