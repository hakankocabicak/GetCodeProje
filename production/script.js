document.addEventListener('DOMContentLoaded', function() {
    let users = document.querySelector('#users');
    
    async function fetchUsers(url) {
        let data = await fetch(url);
        let response = await data.json();

        // Kullanıcı verilerini tabloya ekleyin
        for (let i = 0; i < response.length; i++) {
            users.innerHTML += `
                <tr class="even pointer">
                    <td class=" ">${response[i].id}</td>
                    <td class=" ">${response[i].email}</td>
                    <td class=" ">${response[i].username}</td>
                    <td class=" ">${response[i].name.firstname}</td>
                    <td class=" ">${response[i].name.lastname}</td>
                    <td class="a-right a-right ">${response[i].phone}</td>
                    <td class=" last">
                        <a href="#">
                        <button type="button" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                            <button type="button" class="btn btn-danger delete-button" data-id="${response[i].id}">
                                <i class="fa fa-trash"></i>
                            </button>
                        </a>
                    </td>
                </tr>
            `;
        }

        // Silme butonlarına olay dinleyicisi ekleyin
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', function(event) {
                const row = event.target.closest('tr'); // İlgili tablo satırını seçin
                row.remove(); // Satırı DOM'dan kaldırın
            });
        });
    };

    fetchUsers('https://fakestoreapi.com/users');
});



