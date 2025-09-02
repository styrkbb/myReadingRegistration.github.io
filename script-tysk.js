const form = document.getElementById("bokRegistrering");
const table = document.getElementById("bokTabell");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const Tittel = document.getElementById("tittel").value;
    const Forfatter = document.getElementById("forfatter").value;
    const Sider = document.getElementById("sidetall").value;
    leggTilRad(Tittel, Forfatter, Sider);
    lagreBoker();

    form.reset();
})

function leggTilRad(Tittel, Forfatter, Sider) {
    const rad = document.createElement("tr");
    rad.innerHTML = `
        <td class="tittel">${Tittel}</td>
        <td class="forfatter">${Forfatter}</td>
        <td class="sider">${Sider}</td>
        <td>
            <button class="editBtn">Ändern Seite</button>
            <button class="deleteBtn">Streichen das Buch</button>
            <button class="setFerdig">Fertig?</button>
        </td>
    `;

    table.appendChild(rad);

    rad.querySelector(".editBtn").addEventListener("click", function(){
        const nyttSidetall = prompt("Neu Seite:")
        if (nyttSidetall) {
            rad.querySelector(".sider").textContent = nyttSidetall;
            lagreBoker();
        }
    });

    rad.querySelector(".deleteBtn").addEventListener("click", function(){
        if (confirm("Will du streichen das Buch?")) {
            rad.remove();
            lagreBoker();
        } else {}
    });

    rad.querySelector(".setFerdig").addEventListener("click", function(){
        if (confirm("Sind sie fertig mit deine Buch?")) {
            rad.querySelector(".sider").textContent = "Ferdig lest";
            lagreBoker();
        } else {}
    });
};

function lagreBoker() {
    const raderboker = [];
    table.querySelectorAll("tr").forEach(row => {
        const tittel = row.querySelector(".tittel")?.textContent;
        const forfatter = row.querySelector(".forfatter")?.textContent;
        const sider = row.querySelector(".sider")?.textContent;
        if (tittel && forfatter && sider) {
            raderboker.push({ tittel, forfatter, sider});
        }
    })
    localStorage.setItem("boker", JSON.stringify(raderboker));
}
function lastBoker() {
    const lagret = JSON.parse(localStorage.getItem("boker")) || [];
    lagret.forEach(bok => {
        leggTilRad(bok.tittel, bok.forfatter, bok.sider);
    })
}

lastBoker();