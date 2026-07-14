# 0003 — Lesson 2 delivered: agent loop + harness×deployment

**Date:** 2026-07-13
**Status:** Active

## What was taught (Lesson 2, Domain 1 — Agentic Architecture & Orchestration, 27%)
- The agent loop as a 5-beat cycle: SEND → INSPECT stop_reason → EXECUTE → APPEND → REPEAT.
- Exit conditions / stop_reason handling (end_turn, tool_use, max_tokens, pause_turn, refusal).
- Two invariants stressed: tool_result must echo the tool_use_id; API is stateless (resend history).
- The **harness × deployment** mental model, and the four build approaches:
  manual loop, Tool Runner, Managed Agents (only one that hosts deployment too), Claude Agent SDK.
- Worked example: same add-tool task as manual loop vs Tool Runner.

## Why this order
User chose to go deeper into Agentic Architecture (the 27% domain) rather than basic API
syntax. Lesson 1's "which surface" ladder + Lesson 2's "how to build the agent" pair up as
the core of Domain 1.

## Open loops / ZPD for next session
- Decision task left in Lesson 2 (4 scenarios) — grade when user returns; reveals whether the
  harness×deployment discriminator has stuck.
- **Lesson 3 planned:** Designing the tool surface — bash vs dedicated tools, when to promote an
  action to a typed tool (security/gating/rendering/parallelism). Bridges Domain 1 → Domain 4
  (Tool Design & MCP, 18%).
- Still missing exam format (Q count/time/pass %) — keep quizzes generic until PDF arrives.
- Haven't yet taught: multi-agent orchestration, context management (Domain 5). Queue for later.
