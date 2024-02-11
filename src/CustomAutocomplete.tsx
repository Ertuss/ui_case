import { Autocomplete, AutocompleteOption, Checkbox, CircularProgress, FormHelperText, ListItemContent, ListItemDecorator, Typography, useTheme } from '@mui/joy';
import { ReactNode, useEffect, useState } from 'react'
import { useLazyGetCharactersQuery } from './services/api';
import GetCharactersRequestDTO from './types/GetCharactersRequestDTO';
import React from 'react';

const CustomAutocomplete = () => {
    const theme = useTheme();
    const [searchInput, setsearchInput] = useState<string>("");

    const [triggerGetCharacters, { data, isLoading, error }] = useLazyGetCharactersQuery();
    console.log(error);

    useEffect(() => {

        triggerGetCharacters({
            name: searchInput
        } as GetCharactersRequestDTO);

    }, [searchInput, triggerGetCharacters]);

    function makeSearchedTextBold(name: string, searchInput: string): ReactNode {

        const yeniMetin = name.split(new RegExp(`(${searchInput})`, 'i')).map((kelime, index) => (
            <React.Fragment key={index}>{kelime.toLowerCase() === searchInput.toLowerCase() ? <b>{kelime}</b> : kelime}</React.Fragment>
        ));

        return yeniMetin;
    }

    return (
        <div>
            <Autocomplete
                multiple
                id="tags-default"
                color={Boolean(error) ? "danger" : "neutral"}
                sx={{
                    width: 450,
                    "--Input-focusedThickness": "0px",
                    "boxShadow": "0px 0px 3px -1px rgba(158,158,158,1)"
                }}
                error={Boolean(error)}
                onInputChange={(_event, newInputValue) => {
                    setsearchInput(newInputValue);
                }}
                disableCloseOnSelect
                options={data?.results ?? []}
                noOptionsText={Boolean(error) ? error as string : "Type For Search"}
                loading={isLoading}
                endDecorator={
                    isLoading ? (
                        <CircularProgress size="sm" sx={{ bgcolor: 'background.surface' }} />
                    ) : null
                }
                getOptionKey={opt => opt.id}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                    <AutocompleteOption {...props} sx={{
                        borderBottom: option.id !== data?.results[data?.results.length - 1].id ? "1px solid " + theme.palette.neutral[300] : "none",
                        py: 1,
                    }}>
                        <ListItemDecorator>
                            <Checkbox size="sm" checked={selected} />
                            <img
                                loading="lazy"
                                width="44"
                                height="44"
                                style={{
                                    marginLeft: 7,
                                    marginRight: 7,
                                    borderRadius: 10
                                }}
                                src={option.image}
                                alt=""
                            />
                        </ListItemDecorator>
                        <ListItemContent sx={{
                            fontSize: 'lg',
                            color: "text.secondary"
                        }}>
                            {makeSearchedTextBold(option.name, searchInput)}
                            <Typography level="body-sm" sx={{ color: "text.teritary" }}>
                                {option.episode.length + " Episodes"}
                            </Typography>
                        </ListItemContent>
                    </AutocompleteOption>
                )}
            />
            {Boolean(error) && <FormHelperText>{error as string}</FormHelperText>}
        </div>
    )
}

export default CustomAutocomplete;