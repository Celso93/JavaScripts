# Review Git

[BASIC]
- git init
- git status
- .gitignore
- Idea o staging: 
    - Git add . (add to staging)
    - git reset (removing from staging)

- Commit: taking a unique picture
- git commit -m "message"
- git commit -a(add) -m "message"
- Github
- ssh
- git remote origin(from githut) main(branch)
- git remote -v(verbose, to show origin url)
- git push origin main -u(upstream)

- git fetch (bring the origin branch to local branch)
- git merge origin/main (in your branch you can update the main local)
- git pull = git fecth + merge

[MERGE]
- To use Git merge you need to be in branch that will receive the change;
- You can accept the incomming changes, accept both or decline the incomming change;
- git merge --abort (revert the merge)

[BRANCH]
- git branch (to list all local branches)
- git branch branchName
- git checkout branchName (change to this local branch)
- git checkout -b anotherBranch (create and access to this local branch)
- git branch -d branchName (delete the branch)
- git branch -D branchName (force delete the branch)

[FORK]
- It's more github feature, you can download the source code in your repository without make changes on the main repository;

[RESET]
- You have to know the difference between: Working Dir, Staging area and Commit
- When you have some file in staging area you can use git reset to remove from there
- You can go back to a commit using: git reset commit-ID
- Rollback: git reset commit-ID --hard (becareful to use this when the code is already pushed and when you are working with another developers)

[REVERT]
- git reverse commit-ID
- It will reset and create a commit of this revert
- It`s better to use this than the git reset --HARD commit-ID

[AMEND]
- you can change the name of your commits and add files
- git commit --amend -m 'text modification'
- git commit --amend --no-edit

[STASH]
- Save your progress without commit (you can save in a branch and put in another branch)
- git stash (save your changes in stash)
- git stash pop (pop your stash)
- git stash list (list all stash)
- git stash save nameOfStasah (save your stash)
- git stash apply 1 (you can pop a stash from index)

[REBASE]
- From a new branch feature It`ll bring all the commit from main branch.
- It'll show the commits that is already in main and your feature will be updated.
- Becareful: Do not this if you branch (Example" dev branch) still being updated from another devs.
- git rebase main

[SQUASH]
- Squah is a rebase's feature that will unify many commits in one commints 
- That will leave your commits more organized
- Inside your branch : git rebase yourBranch --interactive
    - change the pick to squash
    - save and close, that will open another file to save
    - check the git log

[ACTIONS]
- https://fireship.io/courses/git/advanced-actions/

[Advanced Git tips]
- https://fireship.io/courses/git/advanced-bonus-tips/