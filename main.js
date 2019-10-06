$(document).ready(function(){
    console.log("ready")
    $(`.puas`).hide()
})

$('#uneg-uneg').submit(function(e){
    e.preventDefault()
    if($('#keluhKesah').val()){
        $(`.puas`).show()
        $(`#list-uneg`).prepend(
            `<h1>${$('#keluhKesah').val()}</h1>`
        )
        $('#keluhKesah').val("")
        
    }
    
    $(`h1`).each(function(index){
        $(`#respond`).empty()
        if(index>=18){
            $(`#respond`).append(
                `<h3>udah gak ada lagi, niat bener</h3>`
            )
        }
        else if(index>=15){
            $(`#respond`).append(
                `<h3>tapi nikmatin aja lah, pengalaman buat kita ini</h3>`
            )
        }
        else if(index>=12){
            $(`#respond`).append(
                `<h3>dalem hati panik padahal wkwkwk</h3>`
            )
        }
        else if(index>=9){
            $(`#respond`).append(
                `<h3>enjoy aja nikmatin</h3>`
            )
        }
        else if(index>=7){
            $(`#respond`).append(
                `<h3>tenang saya juga sama kok</h3>`
            )
        }
        else if(index>=5){
            $(`#respond`).append(
                `<h3>se stress itu kah anda?</h3>`
            )
        }
        else if(index>=3){
            $(`#respond`).show()
            $(`.default`).hide()
            $(`#respond`).append(
                `<h3>anda kenapa?</h3>`
            )
        }
    })
})

function reset(){
    $('#list-uneg').empty()
    $('#list-uneg').append(
        `<button class="button puas" onclick="reset()">Klik jika sudah puas</button>`
    )
    $(`.puas`).hide()
    $(`.default`).show()
    $(`#respond`).hide()
}