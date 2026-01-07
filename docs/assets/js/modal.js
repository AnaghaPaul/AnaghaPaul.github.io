
let viz = null; // Tableau instance

function openModal() {
    const modal = document.getElementById("tableauModal");
    const container = document.getElementById("tableauContainer");

    modal.style.display = "flex";

    if (!viz) {
        const vizUrl = "https://public.tableau.com/views/WazeUserChurnDashboard/Dashboard3";

        const options = {
            hideTabs: false,
            hideToolbar: false,
            width: "100%",
            height: "100%"
        };

        // Create Tableau viz AFTER modal is visible
        setTimeout(() => {
            viz = new tableau.Viz(container, vizUrl, options);
        }, 200);
    }
}

function closeModal() {
    const modal = document.getElementById("tableauModal");
    modal.style.display = "none";

    // Destroy the Tableau viz so it reloads clean next time
    if (viz) {
        viz.dispose();
        viz = null;
    }
}