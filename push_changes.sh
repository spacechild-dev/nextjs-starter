#!/bin/bash
git add .
git commit -m "feat: full supabase integration and admin panel setup"
git push origin dev
git checkout main
git reset --hard dev
git push origin main --force
git checkout dev
