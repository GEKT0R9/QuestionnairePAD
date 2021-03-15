function Go(i){
    
    let block1 = document.getElementById('block1');
    let block2 = document.getElementById('block2');
    let block3 = document.getElementById('block3');
    let block4 = document.getElementById('block4');
    let block5 = document.getElementById('block5');
    let block6 = document.getElementById('block6');
    let block7 = document.getElementById('block7');

    if (i == 1){
        block1.classList.remove('hidden');
        block2.classList.add('hidden');
        block3.classList.add('hidden');
        block4.classList.add('hidden');
        block5.classList.add('hidden');
        block6.classList.add('hidden');
        block7.classList.add('hidden');
    }
    if (i == 2){
        block1.classList.add('hidden');
        block2.classList.remove('hidden');
        block3.classList.add('hidden');
        block4.classList.add('hidden');
        block5.classList.add('hidden');
        block6.classList.add('hidden');
        block7.classList.add('hidden');
    }
    if (i == 3){
        block1.classList.add('hidden');
        block2.classList.add('hidden');
        block3.classList.remove('hidden');
        block4.classList.add('hidden');
        block5.classList.add('hidden');
        block6.classList.add('hidden');
        block7.classList.add('hidden');
    }
    if (i == 4){
        block1.classList.add('hidden');
        block2.classList.add('hidden');
        block3.classList.add('hidden');
        block4.classList.remove('hidden');
        block5.classList.add('hidden');
        block6.classList.add('hidden');
        block7.classList.add('hidden');
    }
    if (i == 5){
        block1.classList.add('hidden');
        block2.classList.add('hidden');
        block3.classList.add('hidden');
        block4.classList.add('hidden');
        block5.classList.remove('hidden');
        block6.classList.add('hidden');
        block7.classList.add('hidden');
    }
    if (i == 6){
        block1.classList.add('hidden');
        block2.classList.add('hidden');
        block3.classList.add('hidden');
        block4.classList.add('hidden');
        block5.classList.add('hidden');
        block6.classList.remove('hidden');
        block7.classList.add('hidden');
    }
    if (i == 7){
        block1.classList.add('hidden');
        block2.classList.add('hidden');
        block3.classList.add('hidden');
        block4.classList.add('hidden');
        block5.classList.add('hidden');
        block6.classList.add('hidden');
        block7.classList.remove('hidden');
    }
}