# 0004 — Lesson 3 delivered: single call vs agent + Managed Agents example

**Date:** 2026-07-24
**Status:** Active

## Trigger
User completed Lessons 1 & 2 but was confused about "single API call, tool runner,
managed agents, Claude Agent SDK" — asked "is it a code loop that runs in different
environments?" (Correct intuition.) Requested a micro-lesson with the Managed Agents
version of the add-tool example.

## What was taught (Lesson 3, Domain 1 — 27%)
- Single API call = one turn, no loop; agent = a loop wrapped around repeated calls.
- Reframed the four approaches on two axes: **who writes the loop** and **whose computer runs it**.
  Only Managed Agents runs on Anthropic's computer; the other three are self-hosted and differ
  only in how much loop code you write (manual → Tool Runner → Agent SDK).
- Managed Agents worked example (agents.create → session → run that PAUSES on requires_action
  for your own tools, submit_tool_outputs to resume). Stressed the seam: your tools pause (run on
  your box), sandbox tools don't (run server-side). tool_call_id ≡ tool_use_id from Lesson 2.
- Flagged Managed Agents method names as beta/volatile — teach the shape, cite docs.

## Open loops / ZPD next
- Decision task in Lesson 3 (Tool Runner vs Managed Agents for the toy task) — grade next chat.
- Lesson 2's 4-scenario decision task still ungraded.
- Next planned: Lesson 4 — tool surface design (bash vs dedicated tools), bridges Domain 1 → 4.
- Still missing exam format (Q count/time/pass %).
