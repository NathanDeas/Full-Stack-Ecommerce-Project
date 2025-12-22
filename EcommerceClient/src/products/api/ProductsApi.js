//GET all products
export async function getProducts() {
    const url = "http://localhost:5071/api/Products";
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error('Could not fetch products');
    }
    const data = await response.json();
    console.log("Fetched products:", data);
    return data;
}


//GET product by its ID
export async function getProductById(id) {
    //see backticks because url needs to be dynamic 
    const url = `http://localhost:5071/api/Products/${id}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        // throw new Error('Could not fetch product');
        return null;
    }
    const data = await response.json();
    console.log("Fetched product:", data);
    return data;
}


//DELETE product by ID
export async function deleteProductById(id) {
    const url = `http://localhost:5071/api/Products/${id}`
        const response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error('Could not DELETE product');
    }
    return "Product Deleted";
}

export async function addProduct(Product) {
    const url = "http://localhost:5071/api/Products";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Product)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

    