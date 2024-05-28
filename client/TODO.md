This commit introduces a landing page, private authenticated-only routes, and a button for registering a new user.

Things that are left or todo:
1. Fix landing pages to be consistent with our theme (to bo done manually using the colours and linear gradients that are already being used in other places), separate the css into separate css files, make the css responsive.

2. Create a page for the register functionality, where users can either sign on as a recruiter or a candidate (input validation so no one signs up as an Admin (disallow usernames such as admin, admin1, etc.))

3. Graceful error handling for when a user tries to access a page while they aren't authenticated (filhal code phat jata hai aur blank screen nazar arahi hai bas). To be done by opening the login/register page and displaying a message at the top saying "Please sign up to view this page, or log in if you are an existing user :)"

4. Anything else that you guys can think of, baqi mein 2-3am tak wapis kaam start karunga. Make a new branch if introducing breaking changes.