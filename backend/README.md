```
flask db --help
flask db init
flask db current
flask db upgrade
flask db downgrade
```

## Database Workflow
1. Make a change to the Model (example: add a new column/attribute)
2. Run `flask db migrate` to create a migration for this change
3. Run `flask db upgrade` to apply the change to the database
4. Made a mistake? Run `flask db downgrade` to reverse it