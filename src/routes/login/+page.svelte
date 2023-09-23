<script lang="ts">
    import * as appwrite from '$lib/appwrite'
    let email = '';
    let password = '';
    const handleLogin = async () => {
        const user = await appwrite.default.accounts.createEmailSession(email, password);
        console.log(user);
    }
    </script>

   <div class='flex text-black'><input type='text' bind:value={email} />
    <input type='password' bind:value={password} />
    </div><input type='submit' on:click={handleLogin} />