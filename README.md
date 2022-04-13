# GIT_project
config husky vs lint-staged
,
     "husky": {
          "hooks": {
               "pre-commit": "lint-staged"
          }
     },
     "lint-staged": {
          "*.js": [
               "prettier --write",
               "git add"
          ]
     }