---
title: Part 2 – LLM Services
description: How to connect to Large Language Model APIs including OpenAI and NVIDIA AI Endpoints.
---

This section explains how to **connect to Large Language Model (LLM) APIs**, including OpenAI and NVIDIA AI Foundation Endpoints, and run inference to generate text.


You’ll learn:

✅ How to set up authentication  
✅ How to create simple completions  
✅ How to integrate these models into LangChain pipelines  

---

## 🧠 What Are LLM Services?

**LLM services** provide cloud-hosted APIs to run language models without maintaining infrastructure yourself.  
You send a prompt → the service returns a generated response.

**Popular Providers:**

- **OpenAI** (GPT-3, GPT-4)
- **Anthropic** (Claude)
- **NVIDIA AI Foundation Endpoints** (Mixtral, Llama 2, Nemotron)

---

## 🛡️ API Key Setup

Before calling any model, set your API keys as environment variables.

#### OpenAI

```bash
export OPENAI_API_KEY="sk-..."
```

#### NVIDIA
```bash
export NVIDIA_API_KEY="nvapi-..."
```

#### ✅ In Jupyter Lab, you can also use
```python
import os
os.environ["OPENAI_API_KEY"] = "sk-..."
os.environ["NVIDIA_API_KEY"] = "nvapi-..."
```

### 🚀 Example: Using OpenAI in LangChain
```python
from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(
    model_name="gpt-4",
    temperature=0.3
)

response = llm.predict("Explain retrieval-augmented generation in simple terms.")
print(response)
```
✅ **Best for general-purpose reasoning and fluency.**

### 🚀 Example: Using NVIDIA AI Endpoints in LangChain
**✅ This is the recommended approach for NVIDIA-hosted models.**

Install the NVIDIA integration package if you haven’t:
```bash
pip install langchain-nvidia-ai-endpoints
```

**Example with Mixtral:**
```python
from langchain_nvidia_ai_endpoints import ChatNVIDIA

llm = ChatNVIDIA(model="mistralai/mixtral-8x22b-instruct-v0.1")

result = llm.invoke("Write a ballad about LangChain.")
print(result.content)
```

**✅ Example with Llama 2:**
```python
llm = ChatNVIDIA(model="meta/llama2-70b-chat")

response = llm.invoke("Give a short explanation of embeddings.")
print(response.content)
```

---

## 🧩 Streaming Example (NVIDIA)
If you want to stream tokens:
```python
llm = ChatNVIDIA(
    model="mistralai/mixtral-8x22b-instruct-v0.1",
    streaming=True
)

for chunk in llm.stream("Summarize LangChain."):
    print(chunk.content, end="", flush=True)
```

---
## 💡 Prompt Engineering Tips
Prompt Structure:

- System Message: Defines behavior.

- User Message: Actual query.

- Optional Context: Retrieved text or examples.

#### ✅ Example with system prompt:
```python
llm = ChatNVIDIA(
    model="meta/llama2-70b-chat",
    messages=[
        {"role": "system", "content": "You are a retrieval-augmented generation expert."}
    ]
)

response = llm.invoke("What is vector search?")
print(response.content)
```
**✅ Best Practices:**

- Be explicit and clear.

- Control randomness with temperature.

- Use examples for better outputs.

---

## 🔗 References
- [OpenAI Python SDK](https://platform.openai.com/docs/overview)
- [LangChain LLM Docs](https://python.langchain.com/docs/modules/models/llms/)
- [NVIDIA AI Endpoints](https://python.langchain.com/docs/integrations/providers/nvidia/#using-nvidia-ai-foundation-endpoints)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)







