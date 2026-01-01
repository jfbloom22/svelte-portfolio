---
title: PsyMetrics AI Assistant
summary: "Designed and built a multi-agent assessment assistant that preserves creative recommendations while guaranteeing selections exist in the PsyMetrics library. Delivered with CAG, automated evaluations, and production-grade observability."
role: AI Architect
year: 2025
tags:
  - AI
  - Custom Software
  - Agentic Systems
  - MLOps
heroImage: /images/projects/psymetrics-psy-ai/hero.png
gallery:
  - /images/projects/psymetrics-psy-ai/gallery-01.png
  - /images/projects/psymetrics-psy-ai/gallery-02.png
---

## The Problem

PsyMetrics needed an AI assistant that could recommend the right assessments from their library without inventing non-existent tests, while still delivering a conversational, helpful experience for users. The assistant also had to support comprehensive recommendations that were not a good fit for traditional RAG approaches.

## The Challenge

Constraining the model improved library accuracy but reduced the quality of recommendations. Loosening constraints improved creativity but caused invalid selections. We also learned that a standard RAG pipeline could not deliver complete coverage across the assessment library for this use case.

## The Solution

We built PsyMetrics AI Assistant using the Agno agent framework with seven custom agents coordinated by deterministic Python functions. We allowed the model to be creative, then filtered and validated selections programmatically against the PsyMetrics library to guarantee only valid assessments were returned.

To address coverage limitations, we adopted CAG (cache-augmented generation) instead of RAG. The system runs on AWS via infrastructure-as-code, uses Groq with Qwen 3 and GPT OSS, and is instrumented with Langfuse for observability. The solution ships with excellent test coverage and automated evaluations.

## The Stack

Agno agent framework, Groq, Qwen 3, GPT OSS, Python, Langfuse, AWS (IaC), CAG (cache-augmented generation).

Learn more at https://psymetrics.ai.
