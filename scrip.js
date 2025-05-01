fetch("https://example-freefire-api.com/wallpapers")
    .then(res => res.json())
    .then(data => {
        console.log(data); // Might contain image URLs
    });
