const product = [
    // Kelautan
    {
        image: 'img/kelautan/ikan_bandeng.png',
        category: 'Seafood',
        title: 'Ikan Bandeng',
        price: '52.500'
    },
    {
        image: 'img/kelautan/gurita.png',
        category: 'Seafood',
        title: 'Gurita',
        price: '67.000'
    },
    {
        image: 'img/kelautan/kepiting.png',
        category: 'Seafood',
        title: 'Kepiting',
        price: '70.000'
    },
    {
        image: 'img/kelautan/ban_pelampung.png',
        category: 'Alat',
        title: 'Pelampung',
        price: '120.000'
    },
    {
        image: 'img/kelautan/alat_snorkling.png',
        category: 'Alat',
        title: 'Kacamata Snorkling',
        price: '190.000'
    },
    {
        image: 'img/kelautan/ikan_sarden.png',
        category: 'Seafood',
        title: 'Ikan Sarden',
        price: '52.000'
    },
    {
        image: 'img/kelautan/kapal_nelayan.png',
        category: 'Alat',
        title: 'Kapal Nelayan',
        price: '4.250.000'
    },
    {
        image: 'img/kelautan/mesin_perahu.png',
        category: 'Alat',
        title: 'Mesin Perahu',
        price: '500.000'
    },
    {
        image: 'img/kelautan/lobster.png',
        category: 'Seafood',
        title: 'Lobster',
        price: '500.000'
    },
    {
        image: 'img/kelautan/set_pancingan.png',
        category: 'Alat',
        title: 'Set Pancingan',
        price: '500.000'
    },
    {
        image: 'img/kelautan/udang.png',
        category: 'Seafood',
        title: 'Udang',
        price: '500.000'
    },
    {
        image: 'img/kelautan/setir_kapal.png',
        category: 'Alat',
        title: 'Setir Kapal',
        price: '500.000'
    },
]

const categories = [...new Set(product.map((item) => {return item}))];

document.getElementById('search-content').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});
