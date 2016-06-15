git add -A

echo 'enter message to commit'
read commit_message

git commit -m "$commit_message"

git push origin master