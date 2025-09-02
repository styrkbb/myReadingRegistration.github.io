const form = document.getElementById("bokRegistrering");
const table = document.getElementById("bokTabell");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const Tittel = document.getElementById("tittel").value;
    const Forfatter = document.getElementById("forfatter").value;
    const Sider = document.getElementById("sidetall").value;

    const rad = document.createElement("tr");
    rad.innerHTML = `
        <td class="tittel">${Tittel}</td>
        <td class="forfatter">${Forfatter}</td>
        <td class="pages">${Sider}</td>
        <td><button class="editBtn">Rediger Sidetall</button><button class="deleteBtn">Slett rad</button></td>
    `;

    table.appendChild(rad);

    rad.querySelector(".editBtn").addEventListener("click", function(){
        const nyttSidetall = prompt("Oppgi nytt sidetall:")
        if (nyttSidetall) {
            rad.querySelector(".pages").textContent = nyttSidetall;
        }
    });

    rad.querySelector(".deleteBtn").addEventListener("click", function(){
        const erDusikker = prompt("Vil du slette denne raden? y/n")
        if (erDusikker === "y") {
            rad.remove()
    }
    })

    form.reset();
});