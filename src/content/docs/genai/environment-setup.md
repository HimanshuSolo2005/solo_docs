---
title: Part 1 – Environment Setup
description: Using the NVIDIA-provided lab environment for RAG development.
---

This section explains how to **access and work in the NVIDIA cloud lab environment** provided as part of the course.

Because NVIDIA provisions a **ready-to-use Jupyter Lab or VS Code instance on AWS or Azure**, you **do not need to set up Docker or local microservices** yourself.

---

## 🧠 What You Will Use

✅ **Jupyter Lab or VS Code** – Preconfigured workspace in your browser  
✅ **Python 3.8+** – Installed in the environment  
✅ **Pre-installed Packages:**
- LangChain
- OpenAI SDK
- Qdrant or FAISS client
- Any other dependencies used in the notebooks

✅ **Environment Variables:**
- Your `OPENAI_API_KEY` or equivalent credentials are preconfigured.

---

## 🚀 Accessing Your Lab Environment

Follow these steps:

1. **Launch the NVIDIA Lab:**
   - Log in to your NVIDIA account.
   - Go to the course dashboard.
   - Start your lab instance.
   - Wait for the environment to initialize.

2. **Open Jupyter Lab:**
   - Use the provided link (typically looks like `https://<your-lab-url>/lab`).
   - No manual installation required.

3. **Verify Packages:**
   - In a new notebook cell, run:

     ```python
     import langchain
     import openai
     print("Environment is ready!")
     ```

   - You should see no errors.

---

## ⚙️ Basic Tips

✅ **Kernel Management:**
- If a cell hangs, click "Kernel > Restart Kernel."

✅ **File Uploads:**
- Use the Jupyter file browser sidebar to upload datasets or config files.

✅ **API Keys:**
- Check `.env` or environment variables pre-set by NVIDIA.
- You usually **don’t** need to create keys yourself.

✅ **Saving Work:**
- Your environment may expire after inactivity.
- Save your notebooks frequently.
- Download copies of important work.

---

## 🛠️ Useful Commands (in Jupyter Terminal)

If you need to install anything extra:

```bash
# Install extra packages
pip install <package-name>

# List installed packages
pip list
