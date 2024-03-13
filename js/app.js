//Javascript Area

// Start site setting 
    const getsitesettings = document.getElementById('sitesettings');
    getsitesettings.addEventListener('click',function(){
        document.body.classList.toggle('show-nav');
    }) 
// End site setting 

// Start Top Sidebar
// Start Navbar 
function dropbtn(e){
    // console.log(e.target);
    e.target.parentElement.nextElementSibling.classList.toggle('show');
}
// End Top Sidebar
// End Navbar 
 
$(document).ready(function(){
    // Start Left Sidebar 

    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    })
    // End Left Sidebar
});

// Start Footer 
    const getyear = document.getElementById('getyear');
    const getfullyear = new Date().getFullYear();
    getyear.textContent = getfullyear;

// End Footer 

//Javascript Area

// 12FT 




