const team = {
    directiva: [
        { 
            name: "Carlos Pérez", 
            role: "CEO", 
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "carlos.perez@empresa.com",
            phone: "+123 456 789"
        },
        { 
            name: "Ana Gómez", 
            role: "Gerente General", 
            img: "https://randomuser.me/api/portraits/women/2.jpg",
            email: "ana.gomez@empresa.com",
            phone: "+987 654 321"
        }
    ],
    empleados: [
        { 
            name: "Luis Rodríguez", 
            role: "Desarrollador", 
            img: "https://randomuser.me/api/portraits/men/3.jpg",
            email: "luis.rodriguez@empresa.com",
            phone: "+111 222 333"
        },
        { 
            name: "María Fernández", 
            role: "Marketing", 
            img: "https://randomuser.me/api/portraits/women/4.jpg",
            email: "maria.fernandez@empresa.com",
            phone: "+444 555 666"
        },
        { 
            name: "Javier López", 
            role: "Soporte Técnico", 
            img: "https://randomuser.me/api/portraits/men/5.jpg",
            email: "javier.lopez@empresa.com",
            phone: "+777 888 999"
        }
    ]
};

function renderTeam(containerId, members) {
    const container = document.getElementById(containerId);
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <div class="name">${member.name}</div>
            <div class="role">${member.role}</div>
            <div class="contact">
                <a href="mailto:${member.email}">✉ ${member.email}</a>
                <a href="tel:${member.phone}">📞 ${member.phone}</a>
            </div>
        `;

        container.appendChild(card);
    });
}

renderTeam("directivaContainer", team.directiva);
renderTeam("empleadosContainer", team.empleados);