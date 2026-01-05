<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard | Nusantara Trade</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <style>
        body { font-family: 'Poppins', sans-serif; background: #f4f7f6; display: flex; height: 100vh; margin: 0; }
        
        /* Sidebar */
        .sidebar { width: 250px; background: #003366; color: white; padding: 20px; display: flex; flex-direction: column; }
        .brand { font-size: 20px; font-weight: 700; margin-bottom: 40px; }
        .brand span { color: #00A86B; }
        .menu-item { padding: 15px; cursor: pointer; border-radius: 8px; margin-bottom: 10px; transition: 0.3s; }
        .menu-item:hover, .menu-item.active { background: rgba(255,255,255,0.1); }
        .menu-item i { margin-right: 10px; width: 20px; }
        
        /* Main Content */
        .main-content { flex: 1; padding: 40px; overflow-y: auto; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .btn-logout { background: #ff4444; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; }

        /* Add Product Form */
        .card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 30px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        input, select { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; font-family: inherit; }
        
        .upload-box { 
            border: 2px dashed #003366; padding: 20px; text-align: center; border-radius: 5px; cursor: pointer; background: #f8fbff;
        }
        .preview-img { max-height: 100px; margin-top: 10px; display: none; border-radius: 5px; }

        .btn-submit { 
            background: #003366; color: white; border: none; padding: 12px 30px; 
            border-radius: 5px; font-weight: 600; cursor: pointer; width: 100%;
        }
        .btn-submit:hover { background: #002244; }
        .btn-submit:disabled { background: #ccc; cursor: not-allowed; }

        /* Product List Table */
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { text-align: left; color: #666; font-size: 12px; padding: 10px; border-bottom: 2px solid #eee; }
        td { padding: 15px 10px; border-bottom: 1px solid #eee; font-size: 14px; vertical-align: middle; }
        .thumb { width: 50px; height: 50px; object-fit: cover; border-radius: 5px; background: #eee; }
        .status-badge { padding: 5px 10px; border-radius: 20px; font-size: 10px; font-weight: bold; }
        .status-active { background: #e6fffa; color: #00A86B; }
        .status-sold { background: #fff5f5; color: #ff4444; }
        .action-btn { background: none; border: none; cursor: pointer; color: #666; transition: 0.2s; }
        .action-btn:hover { color: #ff4444; }

    </style>
</head>
<body>

    <div class="sidebar">
        <div class="brand">Nusantara<span>Trade</span></div>
        <div class="menu-item active"><i class="fas fa-box"></i> Products</div>
        <div class="menu-item"><i class="fas fa-shopping-cart"></i> Orders (Coming Soon)</div>
    </div>

    <div class="main-content">
        <div class="header">
            <h2>Product Management</h2>
            <button class="btn-logout" onclick="logout()">Log Out</button>
        </div>

        <div class="card">
            <h3>Add New Product</h3>
            <form id="addProductForm">
                <div class="form-grid">
                    <input type="text" id="pName" placeholder="Product Name (e.g. iPhone 13)" required>
                    <input type="text" id="pPrice" placeholder="Price (e.g. BDT 45,000)" required>
                    <select id="pCategory">
                        <option value="Electronics">Electronics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Gadgets">Gadgets</option>
                    </select>
                    <select id="pStatus">
                        <option value="Available">Available</option>
                        <option value="Sold Out">Sold Out</option>
                    </select>
                </div>

                <div class="upload-box" onclick="document.getElementById('pFile').click()">
                    <i class="fas fa-cloud-upload-alt"></i> Click to Upload Image
                    <input type="file" id="pFile" style="display: none" accept="image/*" onchange="previewImage(event)">
                    <br>
                    <img id="imgPreview" class="preview-img">
                </div>
                <br>

                <button type="submit" id="submitBtn" class="btn-submit">Upload & Save Product</button>
                <p id="statusMsg" style="text-align: center; margin-top: 10px; font-size: 12px; color: #666;"></p>
            </form>
        </div>

        <div class="card">
            <h3>Inventory List</h3>
            <table>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody id="productTableBody">
                    </tbody>
            </table>
        </div>
    </div>

    <script type="module">
        // 1. Import Firebase Services
        import { db, auth } from './firebase-config.js';
        import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, query, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
        import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

        // --- CONFIGURATION ---
        const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dounsisel/image/upload";
        const CLOUDINARY_PRESET = "nusantara_upload";

        const productForm = document.getElementById('addProductForm');
        const tableBody = document.getElementById('productTableBody');
        const statusMsg = document.getElementById('statusMsg');

        // 2. Check Authentication (Protect the page)
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // If not logged in, kick them back to login page
                window.location.href = "login.html"; 
            } else {
                console.log("Admin Logged In:", user.email);
                loadProducts(); // Load data only if logged in
            }
        });

        // 3. Handle Form Submit (Upload -> Save)
        productForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const fileInput = document.getElementById('pFile');
            const file = fileInput.files[0];

            if (!file) { alert("Please select an image!"); return; }

            try {
                btn.disabled = true;
                btn.innerText = "Uploading Image...";

                // A. Upload Image to Cloudinary
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET);

                const response = await fetch(CLOUDINARY_URL, {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                const imageURL = data.secure_url;

                btn.innerText = "Saving to Database...";

                // B. Save Text Data to Firebase
                await addDoc(collection(db, "products"), {
                    name: document.getElementById('pName').value,
                    price: document.getElementById('pPrice').value,
                    category: document.getElementById('pCategory').value,
                    status: document.getElementById('pStatus').value,
                    image: imageURL,
                    createdAt: serverTimestamp()
                });

                // C. Cleanup
                statusMsg.innerText = "Success! Product Added.";
                productForm.reset();
                document.getElementById('imgPreview').style.display = 'none';
                loadProducts(); // Refresh list

            } catch (error) {
                console.error(error);
                alert("Error: " + error.message);
            } finally {
                btn.disabled = false;
                btn.innerText = "Upload & Save Product";
            }
        });

        // 4. Load Products from Firebase
        async function loadProducts() {
            tableBody.innerHTML = "<tr><td colspan='5'>Loading...</td></tr>";
            
            // Get products sorted by newest first
            const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
            const snapshot = await getDocs(q);
            
            tableBody.innerHTML = ""; // Clear loader

            snapshot.forEach((doc) => {
                const item = doc.data();
                const row = `
                    <tr>
                        <td><img src="${item.image}" class="thumb"></td>
                        <td>${item.name}<br><small style="color:#999">${item.category}</small></td>
                        <td>${item.price}</td>
                        <td><span class="status-badge ${item.status === 'Available' ? 'status-active' : 'status-sold'}">${item.status}</span></td>
                        <td><button class="action-btn" onclick="deleteProduct('${doc.id}')"><i class="fas fa-trash"></i></button></td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        }

        // 5. Global Functions (for HTML onclick attributes)
        window.previewImage = (event) => {
            const reader = new FileReader();
            reader.onload = function(){
                const output = document.getElementById('imgPreview');
                output.src = reader.result;
                output.style.display = 'block';
            };
            reader.readAsDataURL(event.target.files[0]);
        };

        window.logout = () => {
            signOut(auth).then(() => window.location.href = "login.html");
        };

        // Attach delete function to window so the HTML button can see it
        window.deleteProduct = async (id) => {
            if(confirm("Are you sure you want to delete this item?")) {
                await deleteDoc(doc(db, "products", id));
                loadProducts();
            }
        };
    </script>
</body>
</html>
