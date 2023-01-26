import React, { useContext } from 'react'
import { AccountsContext } from '../Home'
import { Box } from '@mui/material'

const ProfilePage = () => {
  const {selectedAccount} = useContext(AccountsContext)
  console.log(selectedAccount)
  return (
    <Box>
      <Box>
        
      </Box>
      <Box></Box>
    </Box>
  )
}
export default ProfilePage
