# 1337 Git workshop

# ⚡ How to contribute ⚡

1. Fork this repo, read [how to fork repo](https://help.github.com/articles/fork-a-repo/)
2. Clone the project to your local machine
3. Install all dependencies :
   - `npm install` or `yarn`

4. Create branch with your intra name, ex: `eaouassa`.
   > ❗ **Never use the `master` branch to create PR** ❗

```sh
git checkout -b <branch-name>
# <branch-name> : ex eaouassa
```

5. Add a file with your name `intraName.yml` (ex: `eaouassa.yml`) to the `./contributors/` directory in your branch.
6. Add code with your infos like this:
```yml
firstName: EL HOUCINE
lastName: AOUASSAR
bio: Front end Web Developer
github: awixor
```

7. Check you change in your local machine

- `yarn start` or `npm run start`
- Your site is now running at `http://localhost:8000`!
- Check the site and Make sure your name and profile avatar is on the list.

8. Commit changes and push

```sh
git add <path-to-the-yaml-file>

#Now commit those changes using the git commit command:
git commit -m "Add <your-name> to Contributors list"
#replacing <your-name> with your name.

#push

git push origin <branch-name>

```

9. Create Pull-Request to `master` branch in this repository, read [how creating PR](https://help.github.com/articles/creating-a-pull-request/)
