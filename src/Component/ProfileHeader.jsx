import React from 'react'
import { Box } from '@mui/material'
const ProfileHeader = (props) => {
  return (
    <>
        <Box>
            {props.changeTab}
            {
              props.image
            }
        </Box>
    </>
  )
}

export default ProfileHeader